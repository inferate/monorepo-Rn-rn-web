import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

interface IWrapperProps{
    error:boolean,
    backgroundColor:string,

   
}
interface ICheckbox {
    disabled:boolean,
}

export const Checkbox = styled(View)<ICheckbox>`
    display: inline-block;
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;
 export const Wrapper = styled(View)<IWrapperProps>`     
    border-color: ${props => props.error ? 'red' : 'black'};     
    background-color: ${props => props.backgroundColor ?props.backgroundColor   : "black"}; 
`;

export const MainView =(props:IWrapperProps)=>{

     
<Wrapper backgroundColor={props.backgroundColor} error={props.error} >

</Wrapper>  


}