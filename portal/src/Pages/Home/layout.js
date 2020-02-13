import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./style";
import Header from "Components/Header";

// import MyMapComponent from "./NewMap";
import Mymap from "./Mymap";

const Home = props => {
  const classes = useStyles();
  const [state, setstate] = useState({
    latitude: "",
    logitude: "",
    isLoaded: false
  });

  const currentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        setstate({
          latitude: location.coords.latitude,
          logitude: location.coords.longitude,
          isLoaded: true
        });
      });
    } else {
      alert(
        "Geolocation is not supported by this browser,May Be Update Your Old Brower"
      );
    }
  };

  useEffect(() => {
    currentLocation();
  }, []);

  return (
    <>
      <Header />
      <Typography className={classes.container}></Typography>
      <div>
        {state.isLoaded && (
          <Mymap
            id="myMap"
            options={{
              center: { lat: state.latitude, lng: state.logitude },
              zoom: 13
            }}
          />
        )}
      </div>
    </>
  );
};

export default Home;
