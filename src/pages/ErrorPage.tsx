import React from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import errorPagesMap from '../utils/errorPagesMap';

type OnlyStatusCodes = keyof typeof errorPagesMap;

const ErrorPage = () => {
    let { statusCode } = useParams();

    if (!statusCode) statusCode = '404';
    else if (!errorPagesMap[statusCode as OnlyStatusCodes]) statusCode = '500';
    
    const text = errorPagesMap[statusCode as OnlyStatusCodes];

    return (
        <ErrorMessage status={statusCode} text={text} />
    );
}

export default ErrorPage;