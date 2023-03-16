import React from "react";

const Card = ({ data }) => {
  

  return (
    <div>
      <img
        src={`assets/s${data.weather[0].icon}.png`}
        alt="Weather Icon"
        className="h-225 w-auto object-cover"
      />
      <div className="bg-cardOverlay p-4 rounded-lg ">
        <span className="text-textColor text-lg">Feels Like </span>
        <p className="font-bold text-textColor text-7xl float-right">
          {Math.round(data.main.feels_like)}°c
        </p>
        <p className="font-bold text-textColor text-lg relative">
          {data.weather[0].main}
        </p>
        <p className="font-bold text-textColor text-lg relative">{data.city}</p>
        <hr />
        <p className="text-base font-medium text-textColor  relative">
          Wind Speed : {data.wind.speed}
        </p>
        <p className="text-base font-medium text-textColor  relative">
          Humidity : {data.main.humidity}
        </p>
      </div>
    </div>
  );
};

export default Card;
