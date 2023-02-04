/* eslint-disable react/jsx-no-undef */
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempretureAndDetails from './components/TempretureAndDetails';
import React from 'react';
import Forecast from './components/Forecast';
import getFormatedWeatherData from './services/weatherService';


function App() {

 const fetchWeather = async ( ) => {
     const data = await getFormatedWeatherData( {q:'london' });
     console.log(data);
 };

 fetchWeather();

  return (
    <div className="max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempretureAndDetails/> 
      <Forecast title="Hourle forecast"/>
      <Forecast title="Daily forecast"/>
     

    </div>
  );
}

export default App;
