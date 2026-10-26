import { ReactNode, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import logo from "@/assets/mockly-logo.png";
import { ArrowRight, AlertCircle } from "lucide-react";

const AuthGate = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // Guest mode state (persists so skips work across reloads)
  const [isGuest, setIsGuest] = useState<boolean>(() => {
    return localStorage.getItem("mockly_guest_mode") === "true";
  });

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) {
        // Clear guest mode if user successfully logged in
        localStorage.removeItem("mockly_guest_mode");
        setIsGuest(false);
      }
    });

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  if (!ready) return null;
  if (session || isGuest) return <>{children}</>;

  const handleSkip = () => {
    localStorage.setItem("mockly_guest_mode", "true");
    setIsGuest(true);
  };

  const handleGoogleSignIn = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) setMsg(error.message);
    } catch (err: unknown) {
      setMsg(err instanceof Error ? err.message : "Google sign in failed");
    } finally {
      setBusy(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        if (error.message.toLowerCase().includes("rate limit")) {
          setMsg("Email rate limit exceeded by Supabase. You can Skip below or turn off 'Confirm email' in Supabase settings.");
        } else {
          setMsg(error.message);
        }
      } else if (!data.session) {
        setMsg("Check your email to confirm your account, then sign in (or click Skip to start now).");
      }
    }
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm p-6 relative" style={{ boxShadow: "var(--shadow-card)" }}>
        {/* Skip button in top right */}
        <div className="flex justify-end mb-1">
          <button
            type="button"
            onClick={handleSkip}
            className="text-xs text-muted-foreground hover:text-foreground font-medium flex items-center gap-1 transition-colors"
          >
            Skip for now <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="flex justify-center mb-5">
          <h1>
            <span className="sr-only">Mockly</span>
            <img src={logo} alt="Mockly" className="h-24 w-auto object-contain" />
          </h1>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {mode === "signin" ? "Sign in to Mockly" : "Create an account"}
        </h2>

        {/* Google OAuth Button */}
        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleSignIn}
          disabled={busy}
          className="w-full flex items-center justify-center gap-2.5 h-10 mb-4 border-border hover:bg-accent font-medium text-sm"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Continue with Google
        </Button>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground font-medium">Or continue with email</span>
          </div>
        </div>

        {/* Email / Password Form */}
        <form onSubmit={submit} className="space-y-3">
          <Input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password (min 6 characters)"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {msg && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-start gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span className="flex-1 leading-relaxed">{msg}</span>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <div className="mt-4 pt-3 border-t border-border/60 text-center space-y-2">
          <button
            type="button"
            className="text-xs text-primary hover:underline font-medium block w-full"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setMsg(null);
            }}
          >
            {mode === "signin" ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 block w-full pt-1"
          >
            Skip login and practice as guest
          </button>
        </div>
      </Card>
    </div>
  );
};

export default AuthGate;
