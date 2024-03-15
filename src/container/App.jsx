import '../index.css'
import '../tailwind.css'
import {Provider} from "react-redux";
import {Suspense} from "react";
import Loading from "../component/Loading/Loading";
import {useRoutes} from "react-router-dom";
import routes from "../router";
import {store} from "../redux/store";

export  default  function App() {
    //路由
    const router = useRoutes(routes());
    return (
        <Suspense fallback={<Loading/>} >
            <Provider store={store}>
                {router}
            </Provider>
        </Suspense>
    )
}
