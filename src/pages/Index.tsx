import { useEffect, useMemo, useState } from "react";
import { questions as maQuestions, Question } from "@/data/questions";
import { iotQuestions } from "@/data/iot-questions";
import { supabase } from "@/integrations/supabase/client";
import {
  buildAttempt,
  ShuffledQuestion,
  getAvailableWeeks,
  poolForWeeks,
} from "@/lib/test-utils";
import logoIcon from "@/assets/mockly-icon.png";
import logoHorizontal from "@/assets/mockly-logo-horizontal.png";
import TestRunner from "@/components/TestRunner";
import Results from "@/components/Results";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shuffle,
  Timer,
  Trophy,
  Sparkles,
  RotateCw,
  Layers,
  CalendarDays,
  ListChecks,
  LogOut,
} from "lucide-react";

type Stage = "home" | "test" | "results";
type Mode = "random" | "unattempted" | "single-week" | "multi-week";

type AttemptConfig = {
  mode: Mode;
  week?: number;
  weeks?: number[];
};

const SUBJECTS = {
  ma: {
    title: "Marketing Analytics",
    questions: maQuestions,
    storageKey: "nptel-attempted-ids",
    testSize: 20,
    singleWeekSize: 10,
  },
  iot: {
    title: "Introduction to Internet of Things",
    questions: iotQuestions,
    storageKey: "nptel-iot-attempted-ids",
    testSize: 30,
    singleWeekSize: 15,
  },
} as const;
type SubjectId = keyof typeof SUBJECTS;

const loadAttempted = (key: string): number[] => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const Index = () => {
  const [subject, setSubject] = useState<SubjectId>(
    () => (localStorage.getItem("nptel-subject") as SubjectId) || "ma"
  );
  useEffect(() => localStorage.setItem("nptel-subject", subject), [subject]);
  const cfg = SUBJECTS[subject] ?? SUBJECTS.ma;
  return (
    <CourseApp
      key={subject}
      subject={subject}
      questions={cfg.questions}
      storageKey={cfg.storageKey}
      onSubject={setSubject}
      testSize={cfg.testSize}
      singleWeekSize={cfg.singleWeekSize}
    />
  );
};

const CourseApp = ({
  subject,
  questions,
  storageKey,
  onSubject,
  testSize,
  singleWeekSize,
}: {
  subject: SubjectId;
  questions: Question[];
  storageKey: string;
  onSubject: (s: SubjectId) => void;
  testSize: number;
  singleWeekSize: number;
}) => {
  const [stage, setStage] = useState<Stage>("home");
  const [attempt, setAttempt] = useState<ShuffledQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [elapsedSec, setElapsedSec] = useState(0);
  const [attemptedIds, setAttemptedIds] = useState<number[]>(() => loadAttempted(storageKey));
  const [lastConfig, setLastConfig] = useState<AttemptConfig>({ mode: "random" });

  // Mode-selector UI state
  const availableWeeks = useMemo(() => getAvailableWeeks(questions), []);
  const [selectorMode, setSelectorMode] = useState<Mode>("random");
  const [singleWeek, setSingleWeek] = useState<number>(availableWeeks[0] ?? 1);
  const [multiWeeks, setMultiWeeks] = useState<number[]>([]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(attemptedIds));
  }, [attemptedIds, storageKey]);

  const unattemptedCount = questions.length - attemptedIds.length;

  const multiPoolSize = useMemo(
    () => poolForWeeks(questions, multiWeeks).length,
    [multiWeeks]
  );
  const singlePoolSize = useMemo(
    () => questions.filter((q) => q.week === singleWeek).length,
    [singleWeek]
  );

  const start = (config: AttemptConfig) => {
    let pool: ReturnType<typeof poolForWeeks> | undefined;
    let size = testSize;

    if (config.mode === "unattempted") {
      pool = questions.filter((q) => !attemptedIds.includes(q.id));
      size = Math.min(testSize, pool.length);
    } else if (config.mode === "single-week" && config.week != null) {
      pool = poolForWeeks(questions, [config.week]);
      size = Math.min(singleWeekSize, pool.length);
    } else if (config.mode === "multi-week" && config.weeks?.length) {
      pool = poolForWeeks(questions, config.weeks);
      size = Math.min(testSize, pool.length);
    }

    if (size <= 0) return;

    // For week-based modes, draw strictly from the pool (no top-up from other weeks).
    const restrict = config.mode === "single-week" || config.mode === "multi-week";
    const built = restrict
      ? buildAttempt(pool!, size, pool)
      : buildAttempt(questions, size, pool);

    setAttempt(built);
    setAnswers({});
    setElapsedSec(0);
    setLastConfig(config);
    setStage("test");
  };

  const startFromSelector = () => {
    if (selectorMode === "single-week") {
      start({ mode: "single-week", week: singleWeek });
    } else if (selectorMode === "multi-week") {
      if (!multiWeeks.length) return;
      start({ mode: "multi-week", weeks: multiWeeks });
    } else {
      start({ mode: selectorMode });
    }
  };

  const submit = (a: Record<number, string>, sec: number) => {
    setAnswers(a);
    setElapsedSec(sec);
    setAttemptedIds((prev) => {
      const set = new Set(prev);
      attempt.forEach((q) => set.add(q.id));
      if (set.size >= questions.length) return [];
      return Array.from(set);
    });
    setStage("results");
    const score = attempt.filter((q) => a[q.id] === q.answer).length;
    supabase.auth.getUser().then(({ data }) => {
      if (data.user)
        supabase.from("test_attempts").insert({
          user_id: data.user.id,
          subject,
          score,
          total: attempt.length,
        }).then(() => {});
    });
  };

  const resetProgress = () => setAttemptedIds([]);

  const toggleAllWeeks = () => {
    setMultiWeeks((prev) =>
      prev.length === availableWeeks.length ? [] : [...availableWeeks]
    );
  };

  const toggleWeek = (w: number) => {
    setMultiWeeks((prev) =>
      prev.includes(w) ? prev.filter((x) => x !== w) : [...prev, w].sort((a, b) => a - b)
    );
  };

  if (stage === "test") {
    return <TestRunner questions={attempt} onSubmit={submit} onExit={() => setStage("home")} />;
  }
  if (stage === "results") {
    return (
      <Results
        questions={attempt}
        answers={answers}
        elapsedSec={elapsedSec}
        onRestart={() => start(lastConfig)}
        onHome={() => setStage("home")}
      />
    );
  }

  const canStart =
    selectorMode === "multi-week"
      ? multiWeeks.length > 0 && multiPoolSize > 0
      : selectorMode === "single-week"
      ? singlePoolSize > 0
      : selectorMode === "unattempted"
      ? unattemptedCount > 0
      : true;

  const startLabel = (() => {
    if (selectorMode === "single-week")
      return `Start single-week test (${Math.min(singleWeekSize, singlePoolSize)} Qs)`;
    if (selectorMode === "multi-week")
      return `Start custom test (${Math.min(testSize, multiPoolSize)} Qs)`;
    if (selectorMode === "unattempted")
      return `Practice unattempted (${Math.min(testSize, unattemptedCount)} Qs)`;
    return `Start a new mock test (${testSize} Qs)`;
  })();

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto py-5 flex items-center gap-3">
          <h1 className="flex items-center">
            <span className="sr-only">Mockly</span>
            <img src={logoIcon} alt="Mockly" className="h-10 w-auto sm:hidden" />
            <img src={logoHorizontal} alt="Mockly" className="h-10 w-auto hidden sm:block" />
          </h1>
          <div className="ml-auto flex items-center gap-2">
            <Select value={subject} onValueChange={(v) => onSubject(v as SubjectId)}>
              <SelectTrigger className="w-56 sm:w-72">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(SUBJECTS) as SubjectId[]).map((k) => (
                  <SelectItem key={k} value={k}>{SUBJECTS[k].title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              title="Sign out / Switch account"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section
          className="rounded-3xl p-8 md:p-16 text-primary-foreground mb-10"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{SUBJECTS[subject].title}</h2>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mb-8">
            Pick a mode below — full random, a single week, or a custom multi-week mix.
            Every attempt reshuffles questions and options for true memorization.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => start({ mode: "random" })}
              className="text-base"
            >
              Quick start ({testSize} Qs)
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => start({ mode: "unattempted" })}
              disabled={unattemptedCount === 0}
              className="bg-transparent border-white/40 hover:bg-white/10 text-primary-foreground"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Practice unattempted ({unattemptedCount} left)
            </Button>
          </div>
        </section>

        {/* MODE SELECTION PANEL */}
        <Card className="p-6 md:p-8 mb-10" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-2 mb-5">
            <ListChecks className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Choose a test mode</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            {([
              { id: "random", icon: Shuffle, title: "Full Random", desc: `${testSize}Q from all weeks` },
              { id: "single-week", icon: CalendarDays, title: "Single Week", desc: `All ${singleWeekSize}Q from one week` },
              { id: "multi-week", icon: Layers, title: "Multi-Week Custom", desc: `${testSize}Q from chosen weeks` },
            ] as const).map((opt) => {
              const active = selectorMode === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectorMode(opt.id)}
                  className={`text-left p-4 rounded-lg border-2 transition-all ${
                    active
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40 hover:bg-accent"
                  }`}
                >
                  <opt.icon className={`h-5 w-5 mb-2 ${active ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="font-semibold text-sm">{opt.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
                </button>
              );
            })}
          </div>

          {selectorMode === "single-week" && (
            <div className="space-y-3">
              <label className="text-sm font-medium">Pick a week</label>
              <Select
                value={String(singleWeek)}
                onValueChange={(v) => setSingleWeek(Number(v))}
              >
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availableWeeks.map((w) => {
                    const count = questions.filter((q) => q.week === w).length;
                    return (
                      <SelectItem key={w} value={String(w)}>
                        Week {w} ({count} Qs)
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Selected pool size: {singlePoolSize} questions ·
                Test length: {Math.min(singleWeekSize, singlePoolSize)} Qs
                {singlePoolSize < singleWeekSize && singlePoolSize > 0 && (
                  <span className="text-destructive"> · fewer than {singleWeekSize} available</span>
                )}
              </p>
            </div>
          )}

          {selectorMode === "multi-week" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Pick weeks</label>
                <Button variant="ghost" size="sm" onClick={toggleAllWeeks}>
                  {multiWeeks.length === availableWeeks.length ? "Clear all" : "Select all"}
                </Button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {availableWeeks.map((w) => {
                  const checked = multiWeeks.includes(w);
                  const count = questions.filter((q) => q.week === w).length;
                  return (
                    <label
                      key={w}
                      className={`flex items-center gap-2 p-2.5 rounded-md border-2 cursor-pointer transition-colors ${
                        checked ? "border-primary bg-primary/5" : "border-border hover:bg-accent"
                      }`}
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleWeek(w)}
                      />
                      <span className="text-sm">
                        Week {w}
                        <span className="text-muted-foreground"> ({count})</span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                Selected pool size: {multiPoolSize} questions ·
                Test length: {Math.min(testSize, multiPoolSize)} Qs
                {multiPoolSize > 0 && multiPoolSize < testSize && (
                  <span className="text-destructive"> · fewer than {testSize} available</span>
                )}
              </p>
            </div>
          )}

          <div className="mt-6">
            <Button size="lg" onClick={startFromSelector} disabled={!canStart}>
              {startLabel}
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Shuffle, title: "Random per attempt", desc: `Each test draws fresh, unique questions.` },
            { icon: Timer, title: "Timed practice", desc: "A live timer mimics real exam pressure." },
            { icon: Trophy, title: "Independent scoring", desc: `Score is out of the test length each time.` },
          ].map((f) => (
            <Card key={f.title} className="p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <f.icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 mt-10 text-sm text-muted-foreground">
          <p>
            {questions.length} questions in pool · {attemptedIds.length} seen ·{" "}
            {unattemptedCount} unattempted
          </p>
          {attemptedIds.length > 0 && (
            <Button variant="ghost" size="sm" onClick={resetProgress}>
              <RotateCw className="h-3.5 w-3.5 mr-1.5" /> Reset progress
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
