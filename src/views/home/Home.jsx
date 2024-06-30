import reactSvg from '@/assets/react.svg';
import viteSvg from '@/assets/vite.svg';
import {useFetcher, useRouteLoaderData} from "react-router-dom";
import {HOME_PATH} from "@/router/index.jsx";
import {useEffect, useState} from "react";

const Home = () => {
    const data = useRouteLoaderData(HOME_PATH);
    const fetcher = useFetcher();
    const [showTime, setShowTime] = useState(false)

    useEffect(() => {
        const timer = setTimeout(()=>{
            fetcher.load(HOME_PATH)
        },1000);

        return () => {
            clearTimeout(timer)
        }
    });

    return (
        <div className='w-full h-vh layout-center'>
            <div className='flex flex-col'>
                <div className='layout-center w-full'>
                    <img src={reactSvg} alt="react" className='w-100px h-100px'/>
                    <h1>+</h1>
                    <img src={viteSvg} alt="vite" className='w-100px h-100px'/>
                </div>
                <div className='text-center text-2xl mt-20px'>
                    Hello,React + Vite
                </div>
                {
                    showTime &&
                    <p className='mt-5px text-center w-full'>{fetcher.data || data}</p>
                }
                <button
                    onClick={() => setShowTime(!showTime)}
                    className='bg-transparent rounded-md border-1px border-gray mt-20px h-40px text-black'>
                    {
                        showTime ? '隐藏时间' : '显示时间'
                    }
                </button>
            </div>
        </div>
    );
}

export default Home;