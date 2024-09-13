import {Outlet, useNavigate} from "react-router-dom";
import {HOME_PATH} from "@/router/index.jsx";
import {useEffect} from "react";

export default function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(HOME_PATH)
    },[navigate])
    return <Outlet/>
}


