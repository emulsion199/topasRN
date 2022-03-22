import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './Components/HomeScreen';

const Stack = createStackNavigator();
const App=()=>
{
  return(
    <NavigationContainer> 
        	{/* 네비게이션 기본틀의 스택을 생성 */} 
            <Stack.Navigator> 
            	{/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
                <Stack.Screen name="Home" component={HomeScreen}/> 
            </Stack.Navigator> 
        </NavigationContainer> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
