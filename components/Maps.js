import react from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from "react-native-maps"
import { useSelector } from "react-redux"
import { selectOrigin } from "../slices/navSlice"


const Maps = () =>{
  const origin = useSelector(selectOrigin);
  return (
   
  <MapView
  style={tw`flex-1`}
  mapType ="mutedStandard"
  initialRegion={{
    latitude: origin.location.lat,
    longitude: origin.location.lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
>
      {origin?.location && (
      <Marker
        coordinate={{
           latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin" 
        />
        )}
     

</MapView>

      
  );
}

const styles = StyleSheet.create({
  
});

export default Maps;