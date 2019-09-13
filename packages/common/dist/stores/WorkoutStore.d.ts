import { ICurrentWorkoutDay } from "../enums/ICurrentWorkoutDay";
import { IWorkoutStoreHistory } from "../models/IWorkoutStore";
import { ICurrentWorkoutExercise } from "./../models/ICurrentWorkoutExercise";
import { RootStore } from "./RootStore";
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquats: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentLifts: number;
    currentJumps: number;
    currentWorkoutDay: ICurrentWorkoutDay;
    workoutHistory: IWorkoutStoreHistory;
    currentExercise: ICurrentWorkoutExercise[];
}
