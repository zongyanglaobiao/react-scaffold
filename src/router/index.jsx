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
        loader:()=> {
            let currentTime = new Date();
            const year = currentTime.getFullYear();
            const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // 月份从0开始
            const day = String(currentTime.getDate()).padStart(2, '0');
            const hour = String(currentTime.getHours()).padStart(2, '0');
            const minute = String(currentTime.getMinutes()).padStart(2, '0');
            const second = String(currentTime.getSeconds()).padStart(2, '0');

            return `${year}/${month}/${day} ${hour}:${minute}:${second}`
        },
        id: HOME_PATH
    },
    {
        path: ROOT_PATH,
        element: <Navigate to={HOME_PATH} />
    }
])


export default  router
export {HOME_PATH}