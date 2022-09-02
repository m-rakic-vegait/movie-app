import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledErrorMessage, StyledErrorStatus, StyledErrorText } from "./ErrorMessage.style";
import Button from "../Button/Button";

const ErrorMessage = ({status, text}: {status: string; text: string}) => {
    const navigate = useNavigate();

    const homepageHandler = () => navigate('/', { replace: true });

    return (
        <StyledErrorMessage>
            <StyledErrorStatus>{status}</StyledErrorStatus>
            <StyledErrorText>{text}</StyledErrorText>
            <Button text="Go to Home page" onClick={homepageHandler} />
        </StyledErrorMessage>
    );
}

export default ErrorMessage;