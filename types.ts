
export interface FlagQuestion {
  flagUrl: string;
  options: string[];
  correctAnswer: string;
}

export enum AnswerState {
  IDLE,
  CORRECT,
  INCORRECT
}
