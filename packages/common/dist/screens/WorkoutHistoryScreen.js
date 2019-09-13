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
var NavigationStore_1 = require("../stores/NavigationStore");
var RootStore_1 = require("../stores/RootStore");
var styled_1 = require("../styled");
var DefaultButton_1 = require("../styled/DefaultButton/DefaultButton");
var DefaultLayoutTitle_1 = require("../styled/DefaultLayout/DefaultLayoutTitle");
exports.WorkoutHistoryScreen = mobx_react_lite_1.observer(function () {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(DefaultLayoutTitle_1.Container, null,
        react_1.default.createElement(DefaultLayoutTitle_1.Title, null, "This is your WK History"),
        react_1.default.createElement(DefaultButton_1.CustomButton, { backgroundColor: styled_1.theme.buttonStyles.main, color: styled_1.theme.textStyle.primary, title: "WK", onPress: function () {
                rootStore.workoutStore.currentExercise.push({
                    exercise: "Squat",
                    numSets: 5,
                    sets: ["", "5", "5", "", ""],
                    weight: 180,
                    reps: 5
                }, {
                    exercise: "Bench Press",
                    numSets: 5,
                    sets: ["5", "5", "5", "5", "5"],
                    weight: 220,
                    reps: 5
                }, {
                    exercise: "DeadLift",
                    numSets: 3,
                    sets: ["x", "x", "x", "x", "x"],
                    weight: 280,
                    reps: 3
                });
                rootStore.navigationStore.path = NavigationStore_1.Navigation2.ActiveWorkoutScreen;
            } })));
});
