import react from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
      id:123,
      title: "Get a ride",
      image: "https://cdn.iconfinder.com/stored_data/1180264/128/png?token=1692696782-am83nFs7CBMqrKZFrjh2JWGGQFtJ4i%2FAbw43yiahv9w%3D",
      screen:"MapScreen",
    },
    {
      id:124,
      title: "Eat",
      image: "https://cdn1.iconfinder.com/data/icons/fillio-food-kitchen-and-cooking/48/kitchen_-_knife_fork_spoon-64.png",
      screen:"EatScreen",
    },
  ];


const Nav = () =>{
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)} 
            style={tw`p-2 bg-gray-200 w-40 pl-4 m-2`}>
            <View>
              <Image
                style={{
                  width:120,
                  height: 120,
                  resizeMode: "contain"
                }}
                source={{ uri: item.image}}
              />
              <Text> {item.title}</Text>
              <Icon 
                style={ tw`p-2 bg-blue-600 rounded-full w-10 mt-4`}
                name='arrowright'
                color='white'
                type='antdesign'
              />
            </View>
          </TouchableOpacity>
        )}
   />
      
  );
}

const styles = StyleSheet.create({
  
});

export default Nav;