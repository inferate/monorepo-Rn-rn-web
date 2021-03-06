/// <reference types="react" />
import { TimerStore } from "./TimerStore";
import { WorkoutStore } from "./WorkoutStore";
export declare class RootStore {
    workoutStore: WorkoutStore;
    timerStore: TimerStore;
    constructor();
}
export declare const RootStoreContext: import("react").Context<RootStore>;
