import React, { useEffect, useState } from "react";
import MapView, {Marker} from "react-native-maps";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { fetchLocation } from "../(services)/api/api";

export default function App() {
  

  const [mapRegion, setMapRegion] = useState(null)
  

  useEffect(() => {
    const location = setInterval(async () => {
      const {latest} = await fetchLocation();
      
      setMapRegion({latitudeDelta: 0.6,
    longitudeDelta: 0.6,mapData:[...latest]})
    }, 5000)

    return () => clearTimeout(location);
  },[])

  
  return (
    <>
      {mapRegion === null ? (
        <View style={styles.textContainer}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={{ opacity: 1}}
            color="#8ac926"
          />
        </View>
      ) : (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              longitudeDelta: mapRegion?.longitudeDelta,
              latitudeDelta: mapRegion?.latitudeDelta,
              longitude: mapRegion?.mapData[0]?.longitude,
              latitude: mapRegion?.mapData[0]?.latitude,
            }}
          >
            {mapRegion?.mapData?.map((location) => (
              <Marker
                key={location.sensorTag}
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title={location.sensorTag}
                image={require("../../assets/logo.png")}
              />
            ))}
          </MapView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 20,
    color: "#8ac926"
  },
  map: {
    width: "100%",
    height: "100%",
  },
 
});
