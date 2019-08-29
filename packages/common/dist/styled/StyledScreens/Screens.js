"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styled_components_1 = __importDefault(require("styled-components"));
exports.Checkbox = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    pointer-events: ", ";\n"], ["\n    display: inline-block;\n    pointer-events: ", ";\n"])), function (props) { return props.disabled ? 'none' : 'auto'; });
exports.Wrapper = styled_components_1.default(react_native_1.View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["     \n    border-color: ", ";     \n    background-color: ", "; \n"], ["     \n    border-color: ", ";     \n    background-color: ", "; \n"])), function (props) { return props.error ? 'red' : 'black'; }, function (props) { return props.backgroundColor ? props.backgroundColor : "black"; });
exports.MainView = function (props) {
    react_1.default.createElement(exports.Wrapper, { backgroundColor: props.backgroundColor, error: props.error });
};
var templateObject_1, templateObject_2;
