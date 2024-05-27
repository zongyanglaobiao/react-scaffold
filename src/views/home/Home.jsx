import reactSvg from '@/assets/react.svg';
import viteSvg from '@/assets/vite.svg';
import {useRouteLoaderData} from "react-router-dom";
import {ROOT_PATH} from "@/router/index.jsx";
import {useEffect, useState} from "react";

const Home = () => {
    const data = useRouteLoaderData(ROOT_PATH);
    // 定义一个状态来存储当前时间
    const [currentTime, setCurrentTime] = useState(new Date());

    // 使用 useEffect 设置一个定时器来更新时间
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 每秒更新一次

        // 清除定时器
        return () => clearInterval(timer);
    }, []);

    // 格式化当前时间
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // 月份从0开始
    const day = String(currentTime.getDate()).padStart(2, '0');
    const hour = String(currentTime.getHours()).padStart(2, '0');
    const minute = String(currentTime.getMinutes()).padStart(2, '0');
    const second = String(currentTime.getSeconds()).padStart(2, '0');

    return (
        <div className='w-full h-100vh layout-center'>
            <div>
                <div className='layout-center w-full'>
                    <img src={reactSvg} alt="react" className='w-100px h-100px'/>
                    <h1>+</h1>
                    <img src={viteSvg} alt="vite" className='w-100px h-100px'/>
                </div>
                <div className='text-center text-2xl mt-20px'>
                    Hello,React + Vite
                </div>
                <strong className={'mt-2px'}>{data}</strong>
                {`${year}/${month}/${day} ${hour}:${minute}:${second}`}
            </div>
        </div>
    );
}

export default Home;