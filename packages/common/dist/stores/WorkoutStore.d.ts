import { IWorkoutStoreHistory } from "../models/IWorkoutStoreHistory";
import { ICurrentWorkoutExercise } from "./../models/ICurrentWorkoutExercise";
import { RootStore } from "./RootStore";
declare type WorkoutDay = "a" | "b";
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadLift: number;
    currentBarbellRow: number;
    currentLifts: number;
    currentJumps: number;
    lastWorkoutType: WorkoutDay;
    history: IWorkoutStoreHistory;
    readonly hasCurrentWorkout: boolean;
    currentExercise: ICurrentWorkoutExercise[];
}
export {};
