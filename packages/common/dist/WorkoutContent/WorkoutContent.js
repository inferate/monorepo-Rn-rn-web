"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styled_1 = require("../styled");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
var MainLayout_1 = require("../styled/DefaultLayout/MainLayout");
exports.WorkoutContent = function (props) {
    return (react_1.default.createElement(DefaultCard_1.WorkoutCard, null,
        react_1.default.createElement(MainLayout_1.TopHeader, null,
            react_1.default.createElement(styled_1.Title, null, props.exercise),
            react_1.default.createElement(styled_1.Title, null, props.weightTimesReps)),
        react_1.default.createElement(MainLayout_1.TopHeader, null, props.reps.map(function (numRep, index) {
            switch (numRep) {
                case "x":
                    numRep === "x";
                    return react_1.default.createElement(react_native_1.Text, null, "x");
                case "empty":
                    numRep.length < 0;
                    return react_1.default.createElement(react_native_1.Text, null);
                default:
                    return (react_1.default.createElement(MainLayout_1.RepsCounter, { key: index },
                        react_1.default.createElement(styled_1.DefTextTitle, null,
                            " ",
                            numRep)));
            }
            // return(
            //     <View key={index}>
            //     </View>
            // )
        }))));
};
