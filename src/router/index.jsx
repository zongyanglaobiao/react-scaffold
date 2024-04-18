import {lazy} from "react";

const Home = lazy(() => import('/src/views/home/Home.jsx'))

export default function routes() {
    return [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/test",
            element: <Home/>
        }
    ];
}