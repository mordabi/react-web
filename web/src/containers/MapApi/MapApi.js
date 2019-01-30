import React from 'react';
import L from 'leaflet';
import Pin from '../../assets/Resources/map/user_pin.png'
import tizz from '../../assets/Resources/map/bar_pin.png'
class Map extends React.Component {

   getRndInteger=(min, max)=> {
    return (Math.random() * (max - min) ) + min;
  }
  
  componentDidMount() {
    //const tizzPin = [];
    let lat =0;
    let len= 0;
    const Icon=L.icon({
      iconUrl: Pin,
      //shadowUrl: 'leaf-shadow.png',
      
      iconSize:     [51, 43], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })
    const Bar =L.icon({
      iconUrl: tizz,
      //shadowUrl: 'leaf-shadow.png',
      
      iconSize:     [38, 40], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })
    // create map
    this.map = L.map('map', {
      center: [51.497442, -0.137156],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    for(var i=0;i<10;i++)
    {
      lat=this.getRndInteger(51.495268,51.498999);
      len = -1 * this.getRndInteger(0.132008,0.144282);
      L.marker([lat,len],{icon:Bar}).addTo(this.map);
    }
     //add marker
  this.marker = L.marker(this.props.markerPosition,{icon: Icon}).bindPopup('My Location').addTo(this.map);
  }
  componentDidUpdate({ markerPosition }) {
    // check if position has changed 
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  }
  render() {
    return <div id='map' style={{height:'300px'}}></div>
  }
}
export default Map;