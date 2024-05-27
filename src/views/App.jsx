import {Suspense} from "react";
import {Provider} from "react-redux";
import Loading from "@/component/loading/Loading";
import {store} from "@/redux/store";
import router from "@/router/index.jsx";
import {RouterProvider} from "react-router-dom";


export  default  function App() {
    return (
        <Suspense fallback={<Loading/>} >
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </Suspense>
    )
}
