import * as wanakana from "wanakana";

export type Noun = { noun: string; counter_group: string };
export type CounterForm = { number: number; counter_group: string; reading: string };
export type Question = { noun: string; number: number; correctReading: string };

export function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateQuestion(nouns: Noun[], counterForms: CounterForm[]): Question | null {
  const noun = randomItem(nouns);
  const matchingForms = counterForms.filter(form => form.counter_group === noun.counter_group);

  if (matchingForms.length === 0) {
    return null;
  }

  const form = randomItem(matchingForms);

  return {
    noun: noun.noun,
    number: form.number,
    correctReading: form.reading
  };
}

export function checkAnswer(guess: string, question: Question): { correct: boolean; message: string } {
  const correct = question.correctReading.trim();
  const trimmedGuess = guess.trim();

  if (!trimmedGuess) {
    return { correct: false, message: '' };
  }

  if (trimmedGuess === correct) {
    return { correct: true, message: '' };
  } else {
    return { correct: false, message: `${correct}` };
  }
}

export function BindWanakana(node: HTMLInputElement) {

    if (wanakana && wanakana.bind) {
        wanakana.bind(node);
    } else {
        console.error("Wanakana failed to load.");
    }
}