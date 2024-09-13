import '@/index.css'
import 'virtual:uno.css'
import ReactDOM from 'react-dom/client';
import {Suspense} from "react";
import Loading from "@/component/loading/Loading.jsx";
import {Provider} from "react-redux";
import {store} from "@/redux/store.js";
import {RouterProvider} from "react-router-dom";
import router from "@/router/index.jsx";

//渲染
ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading/>} >
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </Suspense>
)
