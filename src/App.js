import React, { useState } from 'react'
import { Card } from './components'

import axios from "axios";
import Search from './components/search';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';

const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange= (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
      console.log(currentWeather)

  }

  return (
    <div className='absolute inset-0 bg-white flex items-center justify-center p-4 '>
      
      
      
     
      <div className=" w-full md:w-375 p-4  bg-lightOverlay shadow-2xl rounded-xl backdrop-blur-md flex-col items-center justify-center"> 
      <Search onSearchChange={handleOnSearchChange}/>
      
      
      {currentWeather && <Card data ={currentWeather}/>}
      
      </div>
      
    </div>
  )
}

export default App