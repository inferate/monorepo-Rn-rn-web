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
var WorkoutButton = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  background-color: ", ";\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 20px;\n  box-shadow: 10px 5px 5px #000;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 40px;\n  height: 40px;\n  background-color: ",
    ";\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 20px;\n  box-shadow: 10px 5px 5px #000;\n  align-items: center;\n  justify-content: center;\n"])), function (props) {
    return props.backgroundColor
        ? props.theme.buttonStyles.main
        : props.theme.buttonStyles.default;
});
var ButtonText = styled_components_1.default(react_native_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 17px;\n  text-align: center;\n  margin-left: 2px\n  margin-bottom: 2\n"], ["\n  font-size: 17px;\n  text-align: center;\n  margin-left: 2px\n  margin-bottom: 2\n"])));
exports.CustomizedButton = function (props) { return (react_1.default.createElement(WorkoutButton, { onPress: props.onPress, backgroundColor: props.backgroundColor },
    react_1.default.createElement(ButtonText, null, "+"))); };
var templateObject_1, templateObject_2;
