export interface IWorkoutStoreHistory {
  [key: string]: Array<{
    exercise: string;
    value: number;
  }>;
}
