import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
//This function returns a calender from react-calender as a popup when the button is pushed
function PopCalender() {
  const [value, onChange] = useState(new Date());

  return (
      <Popup trigger={<button> Calender</button>} position="right center">
      <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>    
    </Popup>

  );
}

//it then exports the function PopCalenter to wherever the function is called from the Js file
export default PopCalender; 
