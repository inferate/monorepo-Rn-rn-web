import React from "react";
interface IWorkoutTimer {
    onButtonPress: () => void;
    currentTime: string;
    percent: string;
}
export declare const WorkoutTimer: React.FC<IWorkoutTimer>;
export {};
