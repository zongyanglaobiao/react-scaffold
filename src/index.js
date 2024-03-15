import App from "./container/App";
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))
// 渲染
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);
