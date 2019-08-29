import { View } from 'react-native';
interface IWrapperProps {
    error: boolean;
    backgroundColor: string;
}
interface ICheckbox {
    disabled: boolean;
}
export declare const Checkbox: import("styled-components").StyledComponent<typeof View, any, ICheckbox, never>;
export declare const Wrapper: import("styled-components").StyledComponent<typeof View, any, IWrapperProps, never>;
export declare const MainView: (props: IWrapperProps) => void;
export {};
