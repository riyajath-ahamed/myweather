import React, { useState } from 'react'
import { Card } from './components'

//import axios from "axios";
import Search from './components/search';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';

const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  

  const handleOnSearchChange= (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    

    Promise.all([currentWeatherFetch ])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
       

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        
      })
      .catch(console.log);
      

  }

  return (
    <div>
    <div className='absolute inset-0 bg-white flex items-center justify-center p-4 '>

      <video src='https://lofico.nyc3.digitaloceanspaces.com/scenes/cafe/outside-rain.mp4' 
      autoPlay loop muted className='absolute inset-0 w-full h-full object-cover -z-0'/>
      
      
     
      <div className=" w-full md:w-375 p-4  bg-lightOverlay shadow-2xl rounded-xl backdrop-blur-md flex-col items-center justify-center"> 
      <Search onSearchChange={handleOnSearchChange}/>
      
      
      {currentWeather && <Card data ={currentWeather}/>}

    
      </div>
      
      
    </div>
    <footer class="flex items-center justify-center bg-cardOverlay rounded-lg absolute inset-x-0 bottom-0 z-10">
    <div class="font-medium font-sans text-sm ">
            © 2023. All rights reserved -<span className='block lg:inline-block'> Made with<span className='inline-block h-4'>{heart}</span> by<a href='https://github.com/riyajath-ahamed'> Riyajath Ahamed</a></span>

          </div>
      </footer>
    </div>
  )
}

export default App

export const heart = <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
