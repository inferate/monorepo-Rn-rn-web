"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ICurrentWorkoutDay_1 = require("../enums/ICurrentWorkoutDay");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
exports.HistoryCard = function (_a) {
    var day = _a.day, currentExercise = _a.currentExercise, onPress = _a.onPress;
    return (react_1.default.createElement(DefaultCard_1.WorkoutInformationCard, null,
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress },
            react_1.default.createElement(react_native_1.Text, null, day),
            react_1.default.createElement(react_1.default.Fragment, null, currentExercise.map(function (name) {
                return (react_1.default.createElement(react_native_1.Text, { key: name.exercise }, ICurrentWorkoutDay_1.exerciseName[name.exercise] + ": " + name.numSets + "X" + name.reps + " " + name.weight + " KGM\n          "));
            })))));
};
