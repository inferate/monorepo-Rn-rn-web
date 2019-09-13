"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styled_1 = require("../styled");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
var MainLayout_1 = require("../styled/DefaultLayout/MainLayout");
exports.WorkoutContent = mobx_react_lite_1.observer(function (props) {
    return (react_1.default.createElement(DefaultCard_1.WorkoutCard, null,
        react_1.default.createElement(MainLayout_1.TopHeader, null,
            react_1.default.createElement(styled_1.Title, null, props.exercise),
            react_1.default.createElement(styled_1.Title, null, props.weightTimesReps)),
        react_1.default.createElement(MainLayout_1.TopHeader, null, props.sets.map(function (numRep, index) {
            switch (numRep) {
                case "x":
                    numRep === "x";
                    return (react_1.default.createElement(MainLayout_1.EmptyRepsCounter, { key: numRep + index },
                        react_1.default.createElement(react_native_1.Text, null, "X")));
                case "":
                    numRep.length < 0;
                    return (react_1.default.createElement(MainLayout_1.EmptyReps, { key: numRep + index, onPress: function () { return props.onSetPress(index); } }));
                default:
                    return (react_1.default.createElement(MainLayout_1.RepsCounter, { onPress: function () { return props.onSetPress(index); }, key: numRep + index },
                        react_1.default.createElement(styled_1.DefTextTitle, null,
                            " ",
                            numRep)));
            }
        }))));
});
