import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
// import { deletePlacesAction, loadVaccinationPlaces } from "../../app/redux/actions/placesActions";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


L.Marker.prototype.options.icon = DefaultIcon;

const MapLeafLet = ({place}) => {

    const [position, setPosition] = useState([-29.43312678276487, -66.86011716493444]);
          
    useEffect(() => {
        setPosition([place.latitude || -29.43312678276487, place.longitude || -66.86011716493444]);
    }, [place]);

    console.log(place);
    return (
        <MapContainer style={{ width: '100vw', height: '100vh'}} center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {place?.name}. <br /> {place?.address}.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
 
export default MapLeafLet;