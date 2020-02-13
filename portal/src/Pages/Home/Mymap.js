import React from "react";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyC_W2QaRiFEj4HU-F_uyAlN2oUXKcBoPZw");

const google = window.google;

export default class Mymap extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    var map = new google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );

    // Marker code
    // const myMarker = {
    //   lat: this.props.options.center.lat,
    //   lng: this.props.options.center.lng
    // };
    // var Marker = new google.maps.Marker({
    //   position: myMarker,
    //   map: map
    // });

    //Get Location Address

    Geocode.fromLatLng(
      this.props.options.center.lat,
      this.props.options.center.lng
    ).then(
      response => {
        const address = response.results[0].formatted_address;
        var infoWindow = new google.maps.InfoWindow();
        infoWindow.setPosition(this.props.options.center);
        infoWindow.setContent(address);
        infoWindow.open(map);
      },
      function(error) {
        console.error(error);
      }
    );
  }

  componentDidMount() {
    //If not google
    if (!google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD4da310-x-KsAKt9RLUkgfT20ac1rk8jM&callback=initMap`;
      script.id = "googleMaps";
      document.body.appendChild(script);
      script.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div
        style={{ height: "500px", width: "90%", margin: "0 auto" }}
        id={this.props.id}
      />
    );
  }
}
