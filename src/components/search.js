import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const Search = ({onSearchChange}) => {


    const [cityName, setCityName] = useState(null);

    const loadOptions = async (inputValue) => {
        const response = await fetch(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
            geoApiOptions
        );
        const response_1 = await response.json();
        return {
            options: response_1.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
      };

    const handleOnChange = (searchData) => {
        setCityName(searchData);
        onSearchChange(searchData);
      };


  return (
    <div >
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={1000}
        value={cityName}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className='w-full p-3 rounded-md text-base font-semibold text-textColor outline-yellow-400 shadow-sm border-gray-300  '
        />


    </div>
  )
}

export default Search