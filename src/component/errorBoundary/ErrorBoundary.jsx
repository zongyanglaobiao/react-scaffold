import {useRouteError} from "react-router-dom";

const ErrorBoundary = () => {
    let error = useRouteError();
    return <div className='flex w-full h-100vh justify-center items-center'>错误: {error.data}</div>;
}

export default ErrorBoundary