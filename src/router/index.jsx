import {lazy} from "react";
import {createHashRouter, Navigate} from "react-router-dom";

const HomePage = lazy(() => import('/src/views/home/Home.jsx'))
const ErrorBoundaryPage = lazy(() => import('/src/component/errorBoundary/ErrorBoundary.jsx'))
const NotFoundPage = lazy(() => import('/src/component/404/NotFound.jsx'))

const ROOT_PATH = "/";
const HOME_PATH = "/home";
const NOT_FOUND_PATH = "*";

const router = createHashRouter([
    {
        path: NOT_FOUND_PATH,
        element: <NotFoundPage/>
    },
    {
        path: HOME_PATH,
        element: <HomePage/>,
        errorElement: <ErrorBoundaryPage/>,
    },
    {
        path: ROOT_PATH,
        element: <Navigate to={HOME_PATH}/>,
    }
])


export default  router
export {HOME_PATH}