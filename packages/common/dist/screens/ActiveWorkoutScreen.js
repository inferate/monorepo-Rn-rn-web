"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = require("../styled");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
var WorkoutContent_1 = require("../WorkoutContent/WorkoutContent");
exports.ActiveWorkoutScreen = function () {
    return (react_1.default.createElement(styled_1.Container, null,
        react_1.default.createElement(DefaultCard_1.WorkoutWrapper, null,
            react_1.default.createElement(WorkoutContent_1.WorkoutContent, { reps: ["5", "5", "5", "5", "5"], weightTimesReps: "5X5 260 kgm", exercise: "Squat" }))));
};
