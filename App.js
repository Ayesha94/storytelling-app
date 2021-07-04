import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import Feed from './screens/Feed';
import CreateStory from './screens/CreateStory';

//we are creating bottom tab navigator called Tab
const Tab=createBottomTabNavigator();

export default function App() {
  return (
    //using Navigation container to wrap our screens
   <NavigationContainer>
   <Tab.Navigator
      //with the help of attributes we define specifications
      //in screen options we define icons for all routes:Feed and CreateStory
      screenOptions={({route})=>({
        tabBarIcon:({focused, color,size})=>{
          let iconName;
          if(route.name==="Feed"){
            iconName=focused?'book':'book-outline';
          }else if(route.name==='CreateStory'){
            iconName=focused?'create':'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;

        },
      })}
      //another attribute
      tabBarOptions={{
        activeTintColor:"tomato",
        inactiveTintColor:"gray",
        }} 
    >
     <Tab.Screen name="Feed" component={Feed}/>
     <Tab.Screen name="CreateStory" component={CreateStory}/>
   </Tab.Navigator>

   </NavigationContainer>
  );
}

