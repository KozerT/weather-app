import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
} from '@iconscout/react-unicons';
import {  iconUrlFromCode } from "../services/weatherService";


function TemperatureAndDetails({ weather: {
    details,
    icon,
    temp,
    feels_like,
    humidity,
    speed,
    timezone

},
}) {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className='flex flex-row items-center justify-between py-3 text-white'>
                <img src={iconUrlFromCode(icon)}
                    alt="" className='w-20' />
                <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilTemperature size={18} className="mr-1" />
                        Feels like:
                        <span className='ml-1 font-medium'>{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className='ml-1 font-medium'>{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className='flex items-center justify-center text-sm font-light'>
                        <UilWind size={18} className="mr-1" />
                        Wind Speed:
                        <span className='ml-1 font-medium'>{`${speed.toFixed()} km/h`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemperatureAndDetails;