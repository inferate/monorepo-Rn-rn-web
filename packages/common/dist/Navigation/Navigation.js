"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ActiveWorkoutScreen_1 = require("../screens/ActiveWorkoutScreen");
var WorkoutHistoryScreen_1 = require("../screens/WorkoutHistoryScreen");
var index_1 = require("./Routes/index");
exports.Navigation = function (props) {
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: "/", component: WorkoutHistoryScreen_1.WorkoutHistoryScreen }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "/current-workout/", component: ActiveWorkoutScreen_1.ActiveWorkoutScreen }))));
};
