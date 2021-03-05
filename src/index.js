
import ReactDOM from 'react-dom';
import React  from 'react';
import Forecast from "./Forecast";
import Mapi from './Map';
import Cal from './cal';




//This function serves two purposes, it builds a timer i can display to keep track of how long
function time(){
  var x = 0;
  var countDownDate = new Date().getTime();
  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    var distance =   (now) - countDownDate;
    //Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "; 
    // // If the count down is over, write some text 
    if ((seconds == 0)&&(minutes == 1)&&(hours == 0)&&(days == 0)) {
      alert('You have been here for 1 minute!\nTime to wrap up!');
    }
 

  // This part displays the current time in 24 hours formate on the clock div
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
    var today = new Date(); 
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById('clock').innerHTML = strTime;
  }, 1000);
}

time();// I call the time function for me to be able to view it in the timer one div and clock div

class Caer extends React.Component { //My entry point class where I render all other classes and functions
render() {
    return <div id ="all"> <div >

      <Mapi />
  </div>
      <div id = "top"> <p><strong>Edmonton, Alberta</strong></p><div  id = "weather"> 
      
        <Forecast />
      </div><div id = "clock">
      
      </div>
        <div id="timer">
        <div id = "timer1"></div> 
        
      </div>
      <div id = "op">Time Spent Here
        
      <button onclick ="toggleClock" id="clockButton">Hide</button></div>
      <div id = "mode">
    
      <div id = "date">
        <Cal />
        </div>
      </div>
      
   
  </div>
  
           </div>;
  }
  
}


ReactDOM.render(<Caer />, document.getElementById('root'));//Renders to the html page



function toggleClock() { //Using css to hide the time 
  var myClock = document.getElementById('timer1');
  var displaySetting = myClock.style.display;
  var clockButton = document.getElementById('clockButton');
  if (displaySetting === 'none') {
    myClock.style.display = 'block';
    clockButton.innerHTML = 'Hide';// clock is visible. hide it
  }
  else {
    myClock.style.display = 'none';
    // change button text
    clockButton.innerHTML = 'Show';
  }
}
document.getElementById("clockButton").onclick = toggleClock;
