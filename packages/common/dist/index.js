"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.App = function () {
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Test"))));
};
var styles = react_native_1.StyleSheet.create({
    engine: {
        position: "absolute",
        right: 0
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400"
    },
    highlight: {
        fontWeight: "700"
    }
});
