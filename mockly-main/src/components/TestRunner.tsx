import { useEffect, useMemo, useState } from "react";
import { ShuffledQuestion, splitAnswer } from "@/lib/test-utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Clock, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  questions: ShuffledQuestion[];
  onSubmit: (answers: Record<number, string>, elapsedSec: number) => void;
  onExit: () => void;
};

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const TestRunner = ({ questions, onSubmit, onExit }: Props) => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const q = questions[idx];
  const answeredCount = Object.keys(answers).length;
  const progress = useMemo(() => ((idx + 1) / questions.length) * 100, [idx, questions.length]);

  const select = (opt: string) =>
    setAnswers((a) => {
      if (!q.multi) return { ...a, [q.id]: opt };
      const cur = new Set(splitAnswer(a[q.id]));
      cur.has(opt) ? cur.delete(opt) : cur.add(opt);
      const next = { ...a };
      if (cur.size) next[q.id] = Array.from(cur).sort().join("||");
      else delete next[q.id];
      return next;
    });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock className="h-4 w-4 text-primary" />
            <span className="tabular-nums">{fmt(seconds)}</span>
          </div>
          <div className="flex-1 max-w-md">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1 text-center">
              Question {idx + 1} / {questions.length} · {answeredCount} answered
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Exit test?</AlertDialogTitle>
                <AlertDialogDescription>Your progress will be lost.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Stay</AlertDialogCancel>
                <AlertDialogAction onClick={onExit}>Exit</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>

      <main className="container mx-auto py-8 max-w-3xl">
        <Card className="p-6 md:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
            Week {q.week}
          </div>
          <h2 className="text-lg md:text-xl font-semibold leading-relaxed mb-2">{q.question}</h2>
          <p className="text-xs text-muted-foreground mb-6">{q.multi ? "Select all that apply" : "Select one"}</p>
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const selected = splitAnswer(answers[q.id]).includes(opt);
              return (
                <button
                  key={i}
                  onClick={() => select(opt)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3 ${
                    selected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40 hover:bg-accent"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                      selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                </button>
              );
            })}
          </div>
        </Card>

        <div className="flex items-center justify-between gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>

          {idx < questions.length - 1 ? (
            <Button onClick={() => setIdx((i) => Math.min(questions.length - 1, i + 1))}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Submit test</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Submit your test?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You answered {answeredCount} of {questions.length} questions. Unanswered questions will be marked
                    incorrect.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep going</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onSubmit(answers, seconds)}>Submit</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        <div className="mt-8 grid grid-cols-10 sm:grid-cols-12 gap-1.5">
          {questions.map((qq, i) => {
            const isCurrent = i === idx;
            const isAnswered = answers[qq.id] !== undefined;
            return (
              <button
                key={qq.id}
                onClick={() => setIdx(i)}
                className={`aspect-square rounded text-xs font-medium transition-colors ${
                  isCurrent
                    ? "bg-primary text-primary-foreground"
                    : isAnswered
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TestRunner;
