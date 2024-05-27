import reactSvg from '@/assets/react.svg';
import viteSvg from '@/assets/vite.svg';
import {useFetcher, useRouteLoaderData} from "react-router-dom";
import {HOME_PATH} from "@/router/index.jsx";
import {useEffect} from "react";

const Home = () => {
    const data = useRouteLoaderData(HOME_PATH);
    const fetcher = useFetcher();

    useEffect(() => {
        const timer = setTimeout(()=>{
            fetcher.load(HOME_PATH)
        },1000);

        return () => {
            clearTimeout(timer)
        }
    });

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
                <p className='mt-5px text-center w-full'>{fetcher.data || data}</p>
            </div>
        </div>
    );
}

export default Home;