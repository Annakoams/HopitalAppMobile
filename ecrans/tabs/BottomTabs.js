import { View, Text } from 'react-native'
import React from 'react'
import IconHome from 'react-native-vector-icons/FontAwesome';
import IconChat from 'react-native-vector-icons/Entypo';
import IconSetting from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/index.js'
import Messages from '../Messages/index.js'
import Settings from '../Settings/index.js'




const BottomTabs = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "blue",
          position: "fixed",
          borderRadius: 0,
          bottom: 0,
          left: 0,
          right: 0,
          marginHorizontal: 0
        }
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: 'Dashbord',
          tabBarIcon: ({ color, size, focused }) => (
            <IconHome name="home" color={focused ? 'white' : 'grey'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size, focused }) => (
            <IconChat name="message" color={focused ? 'white' : 'grey'} size={26} />
          ),

        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Paramettres',
          tabBarIcon: ({ color, size, focused }) => (
            <IconSetting name="setting" color={focused ? 'white' : 'grey'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs