import { createContext } from "react";
import { ICurrentWorkoutDay } from "../enums/ICurrentWorkoutDay";
import { IWorkoutStoreHistory } from "../models/IWorkoutStore";

class WorkoutStore {
  currentSquats: number;
  currentBenchPress: number;
  currentOverheadPress: number;
  currentLifts: number;
  currentJumps: number;
  currentWorkoutDay: ICurrentWorkoutDay;
  workoutHistory: IWorkoutStoreHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());
