import React from "react";
import { StyledErrorMessage, StyledErrorStatus, StyledErrorText } from "./ErrorMessage.style";

const ErrorMessage = ({status, text}: {status: string; text: string}) => {
    return (
        <StyledErrorMessage>
            <StyledErrorStatus>{status}</StyledErrorStatus>
            <StyledErrorText>{text}</StyledErrorText>
        </StyledErrorMessage>
    );
}

export default ErrorMessage;