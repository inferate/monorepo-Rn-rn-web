/// <reference types="react" />
declare type Navigation = "Dashboard/Home";
declare class NavigationStore {
    path: Navigation;
}
export declare const NavigationStoreContext: import("react").Context<NavigationStore>;
export {};
