import React from "react";
interface IWorkoutContent {
    exercise: string;
    weightTimesReps: string;
    onSetPress: (index: number) => void;
    sets: string[];
}
export declare const WorkoutContent: React.FC<IWorkoutContent>;
export {};
