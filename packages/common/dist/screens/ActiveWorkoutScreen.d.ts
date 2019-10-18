import React from "react";
import { RouteComponentProps } from "react-router";
interface IActiveWorkoutScreen extends RouteComponentProps<{
    year?: string;
    day?: string;
    month?: string;
}> {
}
export declare const ActiveWorkoutScreen: React.FC<IActiveWorkoutScreen>;
export {};
