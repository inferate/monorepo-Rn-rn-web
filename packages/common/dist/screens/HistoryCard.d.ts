import React from "react";
import { ICurrentWorkoutExercise } from "../models/ICurrentWorkoutExercise";
interface IHistoryCard {
    day: string;
    currentExercise: ICurrentWorkoutExercise[];
}
export declare const HistoryCard: React.FC<IHistoryCard>;
export {};
