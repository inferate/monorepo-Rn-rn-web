import { ICurrentWorkoutExercise } from "./ICurrentWorkoutExercise";

export interface IWorkoutStoreHistory {
  [key: string]: ICurrentWorkoutExercise[];
}
