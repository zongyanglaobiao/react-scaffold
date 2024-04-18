import {Button, message} from "antd";
import request from "@/http/http.request.js";

export default function Test() {
    return (
        <div>
            <Button onClick={async ()=>{
                const response = await request.get('/user/doGetInfo');
                console.log('resp',response)
                if (response.code !== 200) {
                    message.error(response.message);
                }
            }}>
                点击发送请求
            </Button>
        </div>
    )
}

