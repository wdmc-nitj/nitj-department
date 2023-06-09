import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';
function Achievements() {
  

const [url,setUrl]=useState(useLocation());
const {data,loading,error,reFetch}=useFetch(url.pathname);
  return (
    <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Achievements" />

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto" >
        {
          data?data.map((item, i) => {
            return (
              <div key={i} className="relative min-w-0 max-w-md break-words bg-white m-2 mb-6 shadow-lg rounded-xl mt-16 border">
                <div className="flex flex-col break-words bg-white rounded-xl bg-clip-border transition-all flex-auto">
                  <div className="transition-all mx-4 -mt-10 border-2 rounded-lg shadow-2xl overflow-hidden bg-black">
                    <img
                      className="w-full h-full"
                      src={item.img}
                      alt="..."
                    />
                  </div>
                  <div className="flex-auto p-6">
                    <p className="text-lg text-gray-900 mb-4">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            )
          }):<h1>Data not Available</h1>
        }
      </div>
    </div>
  )
}

export default Achievements

