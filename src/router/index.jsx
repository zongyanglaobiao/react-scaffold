import {lazy} from "react";

const Home = lazy(() => import('/src/views/home/Home'))
const Test = lazy(() => import('/src/views/test/Test'))

export default function routes() {
    return [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/test",
            element: <Test/>
        }
    ];
}