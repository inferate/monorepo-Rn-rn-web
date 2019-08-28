/// <reference types="react" />
import { ICurrentWorkoutDay } from "../enums/ICurrentWorkoutDay";
import { IWorkoutStoreHistory } from "../models/IWorkoutStore";
declare class WorkoutStore {
    currentSquats: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentLifts: number;
    currentJumps: number;
    currentWorkoutDay: ICurrentWorkoutDay;
    workoutHistory: IWorkoutStoreHistory;
}
export declare const WorkoutStoreContext: import("react").Context<WorkoutStore>;
export {};
