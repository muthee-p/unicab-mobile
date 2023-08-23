import react from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from "react-native-maps"


const Map = () =>{
  return (
   
  <MapView
  style={tw`flex-1`}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>

      
  );
}

const styles = StyleSheet.create({
  
});

export default Map;