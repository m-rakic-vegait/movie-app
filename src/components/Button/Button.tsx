import React from "react";
import { ButtonWrap } from "./Button.style";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({text, onClick}: ButtonProps) => {
    return (
        <ButtonWrap>
            <button onClick={onClick}>{text}</button>
        </ButtonWrap>
    );
}

export default Button;