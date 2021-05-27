import React,{ Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyle = {width: '100%', height: '35%'};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hide or show the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},         // Shows the InfoWindow to the selectedPlace upon a marker
    };

    onMarkerClick = (props, marker, e) => this.setState({selectedPlace: props, activeMarker: marker, showingInfoWindow: true});

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({showingInfoWindow: false, activeMarker: null});
        }
    };

    render(){
        return(
            <Map google={this.props.google} zoom={10} style={mapStyle} initialCenter={{ lat: -6.210949, lng: 106.818433 }}>
                <Marker onClick={this.onMarkerClick} name={'Solman'} />
                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose} >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyBfSPybcTpeAizsnJs2o-xn55yrR3jjork'})(MapContainer);