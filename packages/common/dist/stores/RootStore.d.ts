/// <reference types="react" />
import { NavigationStore } from "./NavigationStore";
import { TimerStore } from "./TimerStore";
import { WorkoutStore } from "./WorkoutStore";
export declare class RootStore {
    navigationStore: NavigationStore;
    workoutStore: WorkoutStore;
    timerStore: TimerStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
