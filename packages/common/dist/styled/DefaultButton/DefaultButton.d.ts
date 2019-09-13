import React from "react";
interface IDefaultButtonProps {
    backgroundColor: string;
    onPress: () => void;
}
interface IDefaultButtonText {
    color: string;
    title?: string;
}
export declare const CustomButton: React.FC<IDefaultButtonProps & IDefaultButtonText>;
export {};
