/// <reference types="react" />
export declare enum Navigation2 {
    Home = "Home",
    ActiveWorkoutScreen = "ActiveWorkoutScreen"
}
declare class NavigationStore {
    path: Navigation2;
}
export declare const NavigationStoreContext: import("react").Context<NavigationStore>;
export {};
