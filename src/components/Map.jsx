import React from 'react'
import locationIcon from '../images/icon-location.svg'
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import style from '../styles/Iptracker.module.css'

function Map({ipt}) {
    // Create a custom icon
    const customIcon = L.icon({
        iconUrl: locationIcon,
        iconSize: [30, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });
    //change view to see different ip location
    function ChangeView({ center }) {
        const map = useMap();
        map.setView(center);
        return null;
    }
    return (
        <>
            <MapContainer className={style.map} zoomControl={false} center={[ipt.location.lat, ipt.location.lng]} zoom={14} style={{ height: '500px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <ChangeView center={[ipt.location.lat, ipt.location.lng]} />
                    <Marker position={[ipt.location.lat, ipt.location.lng]} icon={customIcon}>
                        <Popup>
                            IP: {ipt.ip} <br />
                            Country: {ipt.location.country} <br />
                            Region: {ipt.location.region} <br />
                        </Popup>
                    </Marker>
                </MapContainer>
        </>
    )
}

export default Map