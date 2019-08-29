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
var ButtonContainer = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100px;\n\theight: 40px\n\tpadding: 12px;\n\tborder-radius: 10px;\t\n\tbackground-color: ", ";\n"], ["\n\twidth: 100px;\n\theight: 40px\n\tpadding: 12px;\n\tborder-radius: 10px;\t\n\tbackground-color: ",
    ";\n"])), function (props) {
    return props.theme.buttonStyles.main
        ? props.theme.buttonStyles.main
        : props.theme.buttonStyles.default;
});
var ButtonText = styled_components_1.default(react_native_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 15px;\n  text-align: center;\n  color: ", ";\n"], ["\n  font-size: 15px;\n  text-align: center;\n  color: ",
    ";\n"])), function (props) {
    return props.theme.textStyle
        ? props.theme.textStyle.thirdy
        : props.theme.backgroundStyle.default;
});
exports.CustomButton = function (props) { return (react_1.default.createElement(ButtonContainer, { backgroundColor: props.backgroundColor },
    react_1.default.createElement(ButtonText, { color: props.color }, props.title))); };
var templateObject_1, templateObject_2;
