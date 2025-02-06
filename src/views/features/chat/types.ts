import { threadType } from "@appTypes/universal";

export interface chatDataTypeNew {
  main_thread: threadType;
  processing: boolean;
  daily_quote: boolean;
  generating_daily_quote: Array<string>;
}

export type questionsCategoriesType =
  | "All"
  | "Know Thyself"
  | "Love Realm"
  | "Career & Finances"
  | "Health & Wellbeing"
  | "Social Sphere"
  | "Romance"
  | "Friendship"
  | "Business";

export interface questionsArrayType {
  id: string;
  question: string;
  premium: boolean;
  category: questionsCategoriesType;
  credits: number;
}
