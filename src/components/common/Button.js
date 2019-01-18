import React from 'react';

// styles
import ButtonWrapper from './styles/Button';

const Button = (props) => (
    <ButtonWrapper onClick={props.onClick}>{props.buttonText}</ButtonWrapper>
);

export default Button;