import { useEffect, useMemo, useState } from "react";
import { ShuffledQuestion, splitAnswer } from "@/lib/test-utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  X,
  Check,
  Zap,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";
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

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const TestRunner = ({ questions, onSubmit, onExit }: Props) => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [seconds, setSeconds] = useState(0);
  const [multiChecked, setMultiChecked] = useState<Record<number, boolean>>({});

  // Instant Feedback mode (defaults to ON, remembers user preference)
  const [instantFeedback, setInstantFeedback] = useState<boolean>(() => {
    const saved = localStorage.getItem("mockly_instant_feedback");
    return saved !== null ? saved === "true" : true;
  });

  const handleToggleInstantFeedback = (checked: boolean) => {
    setInstantFeedback(checked);
    localStorage.setItem("mockly_instant_feedback", String(checked));
  };

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const q = questions[idx];
  const answeredCount = Object.keys(answers).length;
  const progress = useMemo(() => ((idx + 1) / questions.length) * 100, [idx, questions.length]);

  const currentAnswer = answers[q.id];
  const isAnswered = currentAnswer !== undefined && currentAnswer !== "";
  const isMultiRevealed = q.multi ? Boolean(multiChecked[q.id]) : isAnswered;
  const showFeedback = instantFeedback && isMultiRevealed;

  const correctAnswers = useMemo(() => splitAnswer(q.answer), [q.answer]);
  const userAnswers = useMemo(() => splitAnswer(currentAnswer), [currentAnswer]);
  const isCorrect = isAnswered && currentAnswer === q.answer;

  const select = (opt: string) => {
    // If instant feedback is active and single-choice is already answered, prevent overwriting unless retrying
    if (instantFeedback && !q.multi && isAnswered) return;

    setAnswers((a) => {
      if (!q.multi) return { ...a, [q.id]: opt };
      const cur = new Set(splitAnswer(a[q.id]));
      cur.has(opt) ? cur.delete(opt) : cur.add(opt);
      const next = { ...a };
      if (cur.size) next[q.id] = Array.from(cur).sort().join("||");
      else delete next[q.id];
      return next;
    });
  };

  const handleRetryQuestion = () => {
    setAnswers((a) => {
      const next = { ...a };
      delete next[q.id];
      return next;
    });
    setMultiChecked((prev) => ({ ...prev, [q.id]: false }));
  };

  const handleCheckMulti = () => {
    setMultiChecked((prev) => ({ ...prev, [q.id]: true }));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto py-3 px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock className="h-4 w-4 text-primary" />
            <span className="tabular-nums">{fmt(seconds)}</span>
          </div>

          <div className="flex-1 max-w-md hidden md:block">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1 text-center">
              Question {idx + 1} / {questions.length} · {answeredCount} answered
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Instant Feedback Toggle */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border bg-muted/40">
              <Switch
                id="instant-feedback-toggle"
                checked={instantFeedback}
                onCheckedChange={handleToggleInstantFeedback}
              />
              <label
                htmlFor="instant-feedback-toggle"
                className="text-xs font-medium cursor-pointer flex items-center gap-1 select-none"
              >
                <Zap
                  className={`h-3.5 w-3.5 ${
                    instantFeedback ? "text-amber-500 fill-amber-500" : "text-muted-foreground"
                  }`}
                />
                <span className="hidden sm:inline">Instant Answers</span>
              </label>
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
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden px-4 pb-2">
          <Progress value={progress} className="h-1.5" />
          <p className="text-[11px] text-muted-foreground mt-1 text-center">
            Question {idx + 1} of {questions.length} · {answeredCount} answered
          </p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-3xl">
        <Card className="p-6 md:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Week {q.week}
            </span>
            {showFeedback && (
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  isCorrect
                    ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                    : "bg-destructive/15 text-destructive border border-destructive/30"
                }`}
              >
                {isCorrect ? (
                  <>
                    <Check className="h-3 w-3" /> Correct
                  </>
                ) : (
                  <>
                    <X className="h-3 w-3" /> Incorrect
                  </>
                )}
              </span>
            )}
          </div>

          <h2 className="text-lg md:text-xl font-semibold leading-relaxed mb-2">{q.question}</h2>
          <p className="text-xs text-muted-foreground mb-6">
            {q.multi ? "Select all that apply" : "Select one"}
          </p>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const selected = userAnswers.includes(opt);
              const isOptionCorrect = correctAnswers.includes(opt);

              let optionClasses =
                "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 relative ";

              if (showFeedback) {
                if (isOptionCorrect) {
                  // CORRECT OPTION: Emerald Green
                  optionClasses +=
                    "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-medium shadow-sm";
                } else if (selected && !isOptionCorrect) {
                  // WRONG SELECTED OPTION: Crimson Red
                  optionClasses +=
                    "border-destructive bg-destructive/10 text-destructive font-medium shadow-sm";
                } else {
                  // Other wrong unselected options: Dimmed
                  optionClasses += "border-border/40 opacity-40 hover:opacity-75";
                }
              } else {
                // Standard mode (Instant Feedback OFF or not yet answered)
                optionClasses += selected
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-primary/40 hover:bg-accent";
              }

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => select(opt)}
                  disabled={showFeedback && !q.multi}
                  className={optionClasses}
                >
                  {/* Option letter circle / indicator */}
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
                      showFeedback && isOptionCorrect
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : showFeedback && selected && !isOptionCorrect
                        ? "border-destructive bg-destructive text-white"
                        : selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/40 text-muted-foreground"
                    }`}
                  >
                    {showFeedback && isOptionCorrect ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : showFeedback && selected && !isOptionCorrect ? (
                      <X className="h-3.5 w-3.5" />
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </span>

                  <span className="flex-1 leading-snug">{opt}</span>

                  {/* Feedback badges on the right side */}
                  {showFeedback && (
                    <div className="flex items-center shrink-0 ml-2">
                      {isOptionCorrect && (
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                          <Check className="h-3 w-3" /> Correct Answer
                        </span>
                      )}
                      {!isOptionCorrect && selected && (
                        <span className="text-[11px] font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full border border-destructive/30 flex items-center gap-1">
                          <X className="h-3 w-3" /> Your Choice
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Multi-choice check answer button */}
          {instantFeedback && q.multi && !multiChecked[q.id] && isAnswered && (
            <div className="mt-4 flex justify-end">
              <Button size="sm" onClick={handleCheckMulti}>
                <CheckCircle2 className="h-4 w-4 mr-1.5" /> Check My Answers
              </Button>
            </div>
          )}

          {/* Instant feedback explanation callout banner */}
          {showFeedback && (
            <div
              className={`mt-6 p-4 rounded-xl border flex items-start justify-between gap-3 transition-all ${
                isCorrect
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100"
                  : "bg-destructive/10 border-destructive/30 text-destructive dark:text-red-300"
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold text-sm">
                    {isCorrect ? "Correct! Well done." : "Incorrect"}
                  </p>
                  <p className="text-xs opacity-90 mt-0.5">
                    {isCorrect
                      ? "You selected the correct answer."
                      : `The correct option is: ${q.answer}`}
                  </p>
                </div>
              </div>

              {/* Retry button for this question */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRetryQuestion}
                className="text-xs h-8 px-2.5 hover:bg-background/80 shrink-0"
              >
                <RotateCcw className="h-3.5 w-3.5 mr-1" /> Re-try
              </Button>
            </div>
          )}
        </Card>

        {/* Navigation buttons */}
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
                    You answered {answeredCount} of {questions.length} questions. Unanswered questions
                    will be marked incorrect.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep going</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onSubmit(answers, seconds)}>
                    Submit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        {/* Question numbers grid */}
        <div className="mt-8 grid grid-cols-10 sm:grid-cols-12 gap-1.5">
          {questions.map((qq, i) => {
            const isCurrent = i === idx;
            const ans = answers[qq.id];
            const hasAns = ans !== undefined && ans !== "";
            const isQCorrect = hasAns && ans === qq.answer;

            let btnClasses =
              "aspect-square rounded-lg text-xs font-medium transition-all flex items-center justify-center ";

            if (isCurrent) {
              btnClasses += "ring-2 ring-primary ring-offset-2 ring-offset-background font-bold ";
            }

            if (instantFeedback && hasAns) {
              if (isQCorrect) {
                btnClasses +=
                  "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30";
              } else {
                btnClasses +=
                  "bg-destructive/20 text-destructive border border-destructive/40 hover:bg-destructive/30";
              }
            } else if (hasAns) {
              btnClasses += "bg-primary/20 text-primary hover:bg-primary/30";
            } else {
              btnClasses += "bg-muted text-muted-foreground hover:bg-accent";
            }

            return (
              <button
                key={qq.id}
                type="button"
                onClick={() => setIdx(i)}
                className={btnClasses}
                title={`Question ${i + 1}${
                  instantFeedback && hasAns ? (isQCorrect ? " (Correct)" : " (Incorrect)") : ""
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
