import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './Components/HomeScreen';
import SelectStock from './Components/SelectStock';
import SelectDate from './Components/SelectDate';
import SelectPrice from './Components/SelectPrice';
import SelectIdea from './Components/SelectIdea';
import TypeReason from './Components/TypeReason';
import SelectFeeling from './Components/SelectFeeling';
import RecordEval from './Components/RecordEval';
import RecordEnd from './Components/RecordEnd';

const Stack = createStackNavigator();
const App=()=>
{
  return(
    <NavigationContainer>  
        	{/* 네비게이션 기본틀의 스택을 생성 */} 
            <Stack.Navigator initialRouteName="Home"> 
            	{/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
                <Stack.Screen name="Home" component={HomeScreen} options={{title:'홈'}}/> 
                <Stack.Screen name="SelectStock" component={SelectStock} options={{title:'매수기록'}}/> 
                <Stack.Screen name="SelectDate" component={SelectDate} options={{title:'매수기록'}}/> 
                <Stack.Screen name="SelectPrice" component={SelectPrice} options={{title:'매수기록'}}/> 
                <Stack.Screen name="SelectIdea" component={SelectIdea} options={{title:'매수기록'}}/> 
                <Stack.Screen name="TypeReason" component={TypeReason} options={{title:'매수기록'}}/> 
                <Stack.Screen name="SelectFeeling" component={SelectFeeling} options={{title:'매수기록'}}/> 
                <Stack.Screen name="RecordEval" component={RecordEval} options={{title:'매수기록'}}/> 
                <Stack.Screen name="RecordEnd" component={RecordEnd} options={{title:'매수기록'}}/> 
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
