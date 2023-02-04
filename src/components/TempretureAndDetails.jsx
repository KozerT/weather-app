import React from 'react';
import {
    UilSun,
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSunset,

} from '@iconscout/react-unicons';


function TempretureAndDetails() {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p> Cloudy </p>
            </div>

            <div className='flex flex-row items-center justify-between py-3 text-white'>
                <img src="" alt="" className='w-20' />
                <p className='text-5xl'>34 °C </p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilTemperature size={18} className="mr-1" />
                        Feels like:
                        <span className='ml-1 font-medium'>32 °</span>
                    </div>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='ml-1 font-medium'>32% </span>
                    </div>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilWind size={18} className="mr-1" />
                        Wind Speed:
                        <span className='ml-1 font-medium'>11 km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center py-3 space-x-2 text-sm text-white'>
              <UilSun></UilSun>
              <p className='font-light'>Rise: <span>06:45 AM</span></p>
              <p className='font-light'> </p>
              <UilSunset></UilSunset>
              <p className='font-light'>Set: <span>07:45 PM</span></p>
              <p className='font-light'> </p>
              <UilArrowUp></UilArrowUp>
              <p className='font-light'>High: <span>45°</span></p>
              <p className='font-light'> </p>
              <UilArrowDown></UilArrowDown>
              <p className='font-light'>Low: <span> 40°</span></p>
              <p className='font-light'> </p>
            </div>
        </div>
    )
}

export default TempretureAndDetails;