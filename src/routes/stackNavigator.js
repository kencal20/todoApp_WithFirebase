import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../pages/homeScreen'
import DetailsScreen from '../pages/detailsScreen'
import AddTaskScreen from '../pages/addTaskScreen'

export default function StackNavigator() {
    const Stack = createStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='detailsScreen' component={DetailsScreen}/>
        <Stack.Screen name='addTask' component={AddTaskScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}