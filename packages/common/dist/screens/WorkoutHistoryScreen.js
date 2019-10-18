"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var ICurrentWorkoutDay_1 = require("../enums/ICurrentWorkoutDay");
var RootStore_1 = require("../stores/RootStore");
var styled_1 = require("../styled");
var CreateWorkoutButton_1 = require("../styled/DefaultButtons/CreateWorkoutButton");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
var DefaultLayoutTitle_1 = require("../styled/DefaultLayout/DefaultLayoutTitle");
var HistoryCard_1 = require("./HistoryCard");
exports.WorkoutHistoryScreen = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    var historyCard = [];
    Object.entries(rootStore.workoutStore.history).forEach(function (_a, i) {
        var date = _a[0], exercises = _a[1];
        if (i % 4 === 0) {
            historyCard.push([{ date: date, exercises: exercises }]);
        }
        else {
            historyCard[historyCard.length - 1].push({ date: date, exercises: exercises });
        }
    });
    return (react_1.default.createElement(DefaultLayoutTitle_1.Container, null,
        react_1.default.createElement(react_native_1.ScrollView, null,
            react_1.default.createElement(DefaultLayoutTitle_1.AppContainer, null,
                react_1.default.createElement(DefaultLayoutTitle_1.Title, null, "Your WK History")),
            react_1.default.createElement(react_native_1.FlatList, { renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1.default.createElement(DefaultCard_1.CardContent, null, item.map(function (_a) {
                        var date = _a.date, exercises = _a.exercises;
                        return (react_1.default.createElement(HistoryCard_1.HistoryCard, { onPress: function () {
                                var dateFormat = date.split("-");
                                history.push("workout/" + dateFormat[0] + "/" + dateFormat[1] + "/" + dateFormat[2]);
                            }, day: date, currentExercise: exercises }));
                    })));
                }, keyExtractor: function (item) { return item.reduce(function (pv, cv) { return pv + " " + cv; }, ""); }, data: historyCard })),
        react_1.default.createElement(react_native_1.View, { style: { paddingTop: 42 } },
            react_1.default.createElement(CreateWorkoutButton_1.CustomizedButton, { backgroundColor: styled_1.theme.buttonStyles.main, onPress: function () {
                    if (!rootStore.workoutStore.hasCurrentWorkout) {
                        var _a = rootStore.workoutStore, currentBarbellRow = _a.currentBarbellRow, currentBenchPress = _a.currentBenchPress, currentDeadLift = _a.currentDeadLift, currentSquat = _a.currentSquat, currentOverheadPress = _a.currentOverheadPress;
                        var emptySets = ["", "", "", "", ""];
                        if (rootStore.workoutStore.lastWorkoutType ===
                            ICurrentWorkoutDay_1.ICurrentWorkoutDay.b) {
                            rootStore.workoutStore.currentExercise.push({
                                exercise: "Squat",
                                numSets: 5,
                                reps: 5,
                                sets: emptySets.slice(),
                                weight: currentSquat
                            }, {
                                exercise: "Bench Press",
                                numSets: 5,
                                reps: 5,
                                sets: emptySets.slice(),
                                weight: currentBenchPress
                            }, {
                                exercise: "DeadLift",
                                numSets: 1,
                                reps: 5,
                                sets: ["", "x", "x", "x", "x"],
                                weight: currentDeadLift
                            });
                            rootStore.workoutStore.currentSquat += 5;
                            rootStore.workoutStore.currentBenchPress += 5;
                            rootStore.workoutStore.currentDeadLift += 5;
                        }
                        else {
                            rootStore.workoutStore.currentExercise.push({
                                exercise: "Squat",
                                numSets: 5,
                                reps: 5,
                                sets: emptySets.slice(),
                                weight: currentSquat
                            }, {
                                exercise: "Overhead Press",
                                numSets: 5,
                                reps: 5,
                                sets: emptySets.slice(),
                                weight: currentOverheadPress
                            }, {
                                exercise: "Barbell Row",
                                numSets: 5,
                                reps: 5,
                                sets: emptySets.slice(),
                                weight: currentBarbellRow
                            });
                            rootStore.workoutStore.currentSquat += 5;
                            rootStore.workoutStore.currentOverheadPress += 5;
                            rootStore.workoutStore.currentBarbellRow += 5;
                        }
                        rootStore.workoutStore.lastWorkoutType =
                            rootStore.workoutStore.lastWorkoutType ===
                                ICurrentWorkoutDay_1.ICurrentWorkoutDay.a
                                ? ICurrentWorkoutDay_1.ICurrentWorkoutDay.b
                                : ICurrentWorkoutDay_1.ICurrentWorkoutDay.a;
                    }
                    history.push("/current-workout");
                } }))));
});
