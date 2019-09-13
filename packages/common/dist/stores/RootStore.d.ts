/// <reference types="react" />
import { NavigationStore } from "./NavigationStore";
import { WorkoutStore } from "./WorkoutStore";
export declare class RootStore {
    navigationStore: NavigationStore;
    workoutStore: WorkoutStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
