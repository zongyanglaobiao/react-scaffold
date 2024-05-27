import {lazy} from "react";
import {createHashRouter, useRouteError, useRouteLoaderData} from "react-router-dom";

const HomePage = lazy(() => import('/src/views/home/Home.jsx'))
const ErrorBoundaryPage = lazy(() => import('/src/component/errorBoundary/ErrorBoundary.jsx'))

const ROOT_PATH = "/";

function routes() {
    return [
        {
            path: ROOT_PATH,
            element: <HomePage/>,
            errorElement: <ErrorBoundaryPage/>,
            loader:()=> `当前时间: `,
            id: ROOT_PATH
        }
    ];
}

export default  createHashRouter(routes())
export {ROOT_PATH}