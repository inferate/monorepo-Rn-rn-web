"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Navigation_1 = require("./Navigation/Navigation");
exports.App = function () {
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(Navigation_1.Navigation, null)));
};
