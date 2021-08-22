import React, { Component } from 'react';
import { MapLeaFlet } from '../../components/common/MapLeaFlet';

export class MapView extends Component {

    render(){
        return(
            <div className="leaflet-container d-flex">
                <MapLeaFlet position={[-29.45,-66.86,]} zoom={15}/>
            </div>
        )
    }
}