import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <h1>{error.statusText}</h1>
    )
}

export default ErrorPage