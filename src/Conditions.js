import React from 'react';
//This function returns the temperature in Kelvin (Converted it to Celcius by subtracting 275) 
function conditions(props) {
   return (
       <div>
           
           {props.responseObj.cod === 200 ?
               <div>
                   <p>{Math.round(props.responseObj.main.temp)-273}&#8451;, {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default conditions;