import { RootStore } from "./RootStore";
export declare enum Navigation2 {
    Home = "Home",
    ActiveWorkoutScreen = "ActiveWorkoutScreen"
}
export declare class NavigationStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    path: Navigation2;
}
