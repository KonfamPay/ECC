import 'leaflet/dist/leaflet.css'

import{TileLayer, MapContainer,Marker } from 'react-leaflet'

import L from 'leaflet';








const MapComp = ({states}) => {
    const position = [9.08,8.67]
    const markerIcon = new L.Icon({
      iconUrl:'../../../icons/admin-icons/marker.svg',
      location:[15,15],
      iconAnchor:[7,7]
    })


    return ( 
      <MapContainer center={position} style={{ height: "100%",  width: "100%" }} zoom={6} scrollWheelZoom={false}>
        <img src='../../../../../icons/admin-icons/marker.svg'/>
      <TileLayer
       
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {states.map((state)=>

    
      <Marker key={state.coordinates} position={state.coordinates} icon={markerIcon} ></Marker>)
    }
    
    </MapContainer>
     );
}
 
export default MapComp;
