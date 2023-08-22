import react from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'

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
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 bg-gray-200 w-40 pl-4 m-2`}>
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
            </View>
          </TouchableOpacity>
        )}
   />
      
  );
}

const styles = StyleSheet.create({
  
});

export default Nav;