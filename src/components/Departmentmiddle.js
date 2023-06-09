import { React, useState } from 'react'
import gif from "./Vedio/New.gif";
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js'
import Heading from './Heading';


const Departmentmiddle = () => {

    const [url, setUrl] = useState(useLocation());
    const dept = useLocation().pathname.split('/')[2];
    const Activity = useFetch(`/dept/${dept}/Activity`).data;
    const News = useFetch(`/news`).data;
    return (
        <>
            <div className='flex flex-col overflow-hidden md:flex-row max-w-[100%-240px]'>

                {/* Activity  */}
                <div className='max-w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
                    <Heading name="Activities" />
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto px-3'>
                        {
                            Activity ? Activity.map((n, i) =>
                                <div key={i} className='flex flex-auto relative p-2 m-2'>
                                    <li key={i} className="hover:font-medium"><a href={`${n?.link}`}>{n?.title}</a>&nbsp;<span className="absolute pt-1 text-lg"><img className='min-w-[32px]' src={gif} alt='...' /></span>
                                    </li>
                                </div>
                            ) : <h1>Data not available</h1>
                        }
                    </div>
                </div>
                <div className='max-w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
                    <Heading name="News & Highlights" />
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto px-3'>
                        {
                            News ? News.map((n, i) =>
                                <div key={i} className='flex flex-auto relative p-2 m-2'>
                                    <li key={i} className="hover:font-medium"><a href={`${n?.link}`}>{n?.title}</a>&nbsp;<span className="absolute pt-1 text-lg"><img className='min-w-[32px]' src={gif} alt='...' /></span>
                                    </li>
                                </div>
                            ) : <h1>Data not available</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Departmentmiddle