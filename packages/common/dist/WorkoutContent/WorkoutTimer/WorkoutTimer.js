"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DefaultLayoutSection_1 = require("../../styled/DefaultLayout/DefaultLayoutSection");
exports.WorkoutTimer = function (_a) {
    var onButtonPress = _a.onButtonPress, currentTime = _a.currentTime, percent = _a.percent;
    return (react_1.default.createElement(DefaultLayoutSection_1.WorkoutTimerContainer, null,
        react_1.default.createElement(DefaultLayoutSection_1.ProgressBar, { style: { width: percent } }),
        react_1.default.createElement(DefaultLayoutSection_1.TimeWrapper, null,
            react_1.default.createElement(DefaultLayoutSection_1.TimerText, null, currentTime),
            react_1.default.createElement(DefaultLayoutSection_1.TimerBox, { onPress: onButtonPress },
                react_1.default.createElement(DefaultLayoutSection_1.TimerText, null, "X")))));
};
