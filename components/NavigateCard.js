import react from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import {setDestination } from "../slices/navSlice"
import { useDispatch } from "react-redux"



const NavigateCard = () =>{
  const Stack = createStackNavigator()
   const dispatch = useDispatch();
   const navigation = useNavigation();

  return (
   <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Afternoon</Text>

      <View style={tw`border-t border-gray-400 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="where to?" 
            styles={toInputBoxStyles}
            enabledPoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearchQuery"
            debounce={400} 
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
               
              dispatch(setDestination({ 
                location: details.geometry.location, 
                description: data.description
              }))
              navigation.navigate('RideOptions')
              
                
            }}
          />
        </View>
      </View>
   </SafeAreaView>

      
  );
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
});

export default NavigateCard;