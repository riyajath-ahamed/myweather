import React from 'react'
import { Card } from './components'
import  sunnycloud  from "./assets/sunnycloud.png";
import axios from "axios";

const App = () => {



const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


  return (
    <div className='absolute inset-0 bg-white flex items-center justify-center p-4 '>
      
     
      <div className=" w-full md:w-375 p-4  bg-lightOverlay shadow-2xl rounded-xl backdrop-blur-md flex-col items-center justify-center"> 
      <div>
        <img src={sunnycloud} />
        <p className='font-bold text-textColor text-7xl float-right'>32°c</p>
      </div>
      
      </div>
      
    </div>
  )
}

export default App