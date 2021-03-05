import Conditions from './Conditions';

import React, { useState } from 'react';
   // this function returns the conditions function once it's been loaded

   
    function Forecast () {
    let [responseObj, setResponseObj] = useState({});
   function getForecast() {
      //This function fetches the data from open weather API
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Edmonton&lat=0&units=Celsius", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e2c2032a7dmsh3b53f50efda9c66p1c0b9djsn2fdf6cba2fdf",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
       .then(response => {
           setResponseObj(response)
       });
   }
   
   return (
    <div>
    {window.addEventListener('load', getForecast)}
    
    <Conditions responseObj={responseObj}/>
    </div> 
   )
}
export default Forecast;