import { Question } from "@/data/questions";

export type ShuffledQuestion = {
  id: number;
  week: number;
  question: string;
  options: string[]; // shuffled
  answer: string;
  multi?: boolean;
};

export const splitAnswer = (a?: string) => (a ? a.split("||") : []);

export const TEST_SIZE = 20;
export const SINGLE_WEEK_SIZE = 10;

export function getAvailableWeeks(questions: Question[]): number[] {
  return Array.from(new Set(questions.map((q) => q.week))).sort((a, b) => a - b);
}

export function poolForWeeks(questions: Question[], weeks: number[]): Question[] {
  if (!weeks.length) return [];
  const set = new Set(weeks);
  return questions.filter((q) => set.has(q.week));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build a fresh test attempt.
 * - Picks `size` unique questions at random from the pool.
 * - If `pool` is provided (e.g. unattempted-only), draws from it; falls back
 *   to all `questions` when the pool has fewer items than requested.
 * - Shuffles the selected questions and their options.
 */
export function buildAttempt(
  questions: Question[],
  size: number = TEST_SIZE,
  pool?: Question[]
): ShuffledQuestion[] {
  let source = pool && pool.length > 0 ? pool : questions;
  if (source.length < size) {
    // Top up from the full pool if the restricted pool is too small
    const ids = new Set(source.map((q) => q.id));
    const filler = questions.filter((q) => !ids.has(q.id));
    source = [...source, ...shuffle(filler)].slice(0, Math.max(size, source.length));
  }
  const picked = shuffle(source).slice(0, Math.min(size, source.length));
  return shuffle(picked).map((q) => ({
    ...q,
    options: shuffle(q.options),
  }));
}
