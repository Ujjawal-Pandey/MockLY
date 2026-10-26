import { ShuffledQuestion, splitAnswer } from "@/lib/test-utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, RotateCw, Home, Trophy } from "lucide-react";
import { useState } from "react";

type Props = {
  questions: ShuffledQuestion[];
  answers: Record<number, string>;
  elapsedSec: number;
  onRestart: () => void;
  onHome: () => void;
};

const fmt = (s: number) => `${Math.floor(s / 60)}m ${s % 60}s`;

const Results = ({ questions, answers, elapsedSec, onRestart, onHome }: Props) => {
  const [filter, setFilter] = useState<"all" | "correct" | "wrong">("all");

  const score = questions.reduce((acc, q) => (answers[q.id] === q.answer ? acc + 1 : acc), 0);
  const pct = Math.round((score / questions.length) * 100);
  const wrong = questions.length - score;

  const visible = questions.filter((q) => {
    const isCorrect = answers[q.id] === q.answer;
    if (filter === "correct") return isCorrect;
    if (filter === "wrong") return !isCorrect;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-16">
      <header
        className="text-primary-foreground"
        style={{ background: pct >= 60 ? "var(--gradient-success)" : "var(--gradient-hero)" }}
      >
        <div className="container mx-auto py-12 text-center">
          <Trophy className="h-12 w-12 mx-auto mb-3 opacity-90" />
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Your score</p>
          <h1 className="text-6xl font-bold mb-2">
            {score}<span className="opacity-60 text-3xl">/{questions.length}</span>
          </h1>
          <p className="text-xl opacity-90">{pct}% · finished in {fmt(elapsedSec)}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Button variant="secondary" onClick={onRestart}>
              <RotateCw className="h-4 w-4 mr-2" /> Reattempt (fresh shuffle)
            </Button>
            <Button variant="outline" onClick={onHome} className="bg-transparent border-white/40 hover:bg-white/10">
              <Home className="h-4 w-4 mr-2" /> Home
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 max-w-3xl">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Check className="h-5 w-5" style={{ color: "hsl(var(--success))" }} />
            </div>
            <div>
              <p className="text-2xl font-bold">{score}</p>
              <p className="text-xs text-muted-foreground">Correct</p>
            </div>
          </Card>
          <Card className="p-5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <X className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-bold">{wrong}</p>
              <p className="text-xs text-muted-foreground">Incorrect</p>
            </div>
          </Card>
        </div>

        <div className="flex gap-2 mb-4">
          {(["all", "correct", "wrong"] as const).map((f) => (
            <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : f === "correct" ? "Correct" : "Incorrect"}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {visible.map((q, i) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.answer;
            return (
              <Card key={q.id} className="p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Week {q.week} · Q{i + 1}
                  </div>
                  {isCorrect ? (
                    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-success/10" style={{ color: "hsl(var(--success))" }}>
                      <Check className="h-3 w-3" /> Correct
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-destructive/10 text-destructive">
                      <X className="h-3 w-3" /> {userAns ? "Wrong" : "Skipped"}
                    </span>
                  )}
                </div>
                <p className="font-medium mb-4 leading-relaxed">{q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => {
                    const isAnswer = splitAnswer(q.answer).includes(opt);
                    const isUser = splitAnswer(userAns).includes(opt);
                    let cls = "border-border";
                    if (isAnswer) cls = "border-success bg-success/5";
                    else if (isUser) cls = "border-destructive bg-destructive/5";
                    return (
                      <div
                        key={j}
                        className={`p-3 rounded-lg border-2 flex items-center gap-3 text-sm ${cls}`}
                        style={isAnswer ? { borderColor: "hsl(var(--success))" } : undefined}
                      >
                        <span className="font-bold text-xs w-5">{String.fromCharCode(65 + j)}.</span>
                        <span className="flex-1">{opt}</span>
                        {isAnswer && <Check className="h-4 w-4" style={{ color: "hsl(var(--success))" }} />}
                        {isUser && !isAnswer && <X className="h-4 w-4 text-destructive" />}
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Results;
