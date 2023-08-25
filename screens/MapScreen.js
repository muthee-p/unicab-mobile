import react from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import Maps from '../components/Maps'
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard'
import RideOptions from '../components/RideOptions'

const MapScreen = () =>{
  const Stack = createStackNavigator()
  return (
   <View>
      <View style={tw`h-1/2`}>
        <Maps /> 
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
   </View>

      
  );
}

const styles = StyleSheet.create({
  
});

export default MapScreen;