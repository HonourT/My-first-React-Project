import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import Styles from './index.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaG90ZW1wbGUiLCJhIjoiY2tsb2YwdDRqMG83aTJvcjB6OGc5cXl1aCJ9.mWdcyFsyCNxuVdcaJsvhcA'


class Mapi extends Component{
    constructor(props){
        super();
    }
 
    componentDidMount(){
        var maps = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-113.4938, 53.5461],
            zoom: 10

        })
        //This creates  a div for each location i want to mark and assigns a class to it for it to be styled
        //A marker is then set at a a specific coordinate and my div is added to the map. it has a popup addition that shows some descriptions when ckicked
        var me = document.createElement('div');
        me.className = 'marker';
       var marker = new mapboxgl.Marker(me, {offset: [0, -50/2]})
      .setLngLat([-113.6242, 53.5225]) 
      .setPopup(new mapboxgl.Popup({ offset: 25 }) 
      .setHTML('<h3>' + "West Edmonton Mall" + '</h3><p>' + "The largest mall in north america" + '</p>'))
      .addTo(maps);

      var me1 = document.createElement('div');
    me1.className = 'marker1';
       var marker = new mapboxgl.Marker(me1, {offset: [0, -50/2]})
      .setLngLat([-113.4168, 53.5254])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) 
      .setHTML('<h3>' + "The King's University" + '</h3><p>' + "private Canadian Christian university offering bachelor's degrees in the arts, humanities, music, social sciences, natural sciences, business, and education." + '</p>'))
      .addTo(maps);

      var me2 = document.createElement('div');
    me2.className = 'marker2';
   var marker = new mapboxgl.Marker(me2, {offset: [0, -50/2]})
      .setLngLat([-113.4165, 53.5204])
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>' + "The Summit Edmonton" + '</h3><p>' + " The Penticostal Church I go to, Approximately 6 minutes walk from home" + '</p>'))
      .addTo(maps);

      var me3 = document.createElement('div');
    me3.className = 'marker3';
   var marker = new mapboxgl.Marker(me3, {offset: [0, -50/2]})
      .setLngLat([-113.5066, 53.5335])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) 
      .setHTML('<h3>' + "The Legislature Building" + '</h3><p>' + "The Alberta Legislature Building is located in Edmonton, Alberta, and is the meeting place of the Legislative Assembly and the Executive Council." + '</p>'))
      .addTo(maps);

      var me4 = document.createElement('div');
    me4.className = 'marker4';
   var marker = new mapboxgl.Marker(me4, {offset: [0, -50/2]})
      .setLngLat([-113.5774, 53.3054])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) 
      .setHTML('<h3>' + "Edmonton International Airport" + '</h3><p>' + "YEG" + '</p>'))
      .addTo(maps);

    var me5 = document.createElement('div');
        me5.className = 'marker5';
    var marker = new mapboxgl.Marker(me5, {offset: [0, -50/2]})
        .setLngLat([-113.417857, 	53.539299])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) 
        .setHTML('<h3>' + "McDonald's" + '</h3><p>' + "The closest McDonalds to my home" + '</p>'))
        .addTo(maps);

      var me6 = document.createElement('div');
    me6.className = 'marker6';
   var marker = new mapboxgl.Marker(me6, {offset: [0, -50/2]})
      .setLngLat([-113.417505, 53.524594])
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>' + "Home" + '</h3><p>' + "The apartment building I live in owned by my univeraity" + '</p>'))
      .addTo(maps);

      var me7 = document.createElement('div');
    me7.className = 'marker7';
   var marker = new mapboxgl.Marker(me7, {offset: [0, -50/2]})
      .setLngLat([-113.4205, 53.5391])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) 
      .setHTML('<h3>' + "Walmart" + '</h3><p>' + "The closest affordable grocery store to my home" + '</p>'))
      .addTo(maps);

    }
    render(){
        return(
            <div>
              
                <div ref={el => this.mapContainer = el} style={{width: '100%', height:'100vh'}} />
            
            </div>
        )
    }
}


export default Mapi;