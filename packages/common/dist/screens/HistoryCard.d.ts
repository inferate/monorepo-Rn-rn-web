import React from "react";
import { ICurrentWorkoutExercise } from "../models/ICurrentWorkoutExercise";
interface IHistoryCard {
    day: string;
    currentExercise: ICurrentWorkoutExercise[];
    onPress?: () => void;
}
export declare const HistoryCard: React.FC<IHistoryCard>;
export {};
