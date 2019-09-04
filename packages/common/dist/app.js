"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import React from "react";
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var Navigation_1 = require("./Navigation/Navigation");
var styled_1 = require("./styled");
var defStyles_1 = require("./styled/withTheme/defStyles");
exports.App = function () {
    return (react_1.default.createElement(styled_1.AppContainer, null,
        react_1.default.createElement(styled_1.AppWrapper, null,
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: defStyles_1.theme },
                react_1.default.createElement(Navigation_1.Navigation, null)))));
};
