"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DefaultLayoutTitle_1 = require("../styled/DefaultLayout/DefaultLayoutTitle");
exports.ActiveWorkoutScreen = function () {
    return (react_1.default.createElement(DefaultLayoutTitle_1.Container, null,
        react_1.default.createElement(DefaultLayoutTitle_1.Title, null, "This is your current WK ")));
};
