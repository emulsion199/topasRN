import {Text,View,StyleSheet,TextInput,TouchableOpacity, ScrollView,Button} from 'react-native'
import {useState,useEffect} from 'react'
import Color from '../Data/Color'
import TagBox from './TagBox';
const SelectIdea=({navigation})=>
{
    ////
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(currentDate)
      };
    //Make StockName List//
   
    //State Value//
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    //State Cycle//
    
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <Text style={styles.MainSentence}>구매를 축하드려요!</Text>
                <Text style={styles.SubSentence}>파스님의 투자 기록을 확인해보세요!</Text>

            </View>
            <View style={styles.down}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={styles.NextButton}><Text>확인하러 가기</Text></TouchableOpacity>
            </View>
            
        </View>
    )

}
const styles=StyleSheet.create(
    {
      container:
      {
          padding:24,
          backgroundColor:'#fff',
          flex:1,
      },
      MainSentence:
      {
          marginTop:120,
          textAlign:'center',
          fontSize:24,
          fontWeight:'bold',
      },
      SubSentence:
      {
          marginTop:250,
          textAlign:'center',
          fontSize:20,
          marginBottom:20,
      },
      
      SelectDateBox:
      {
          flexDirection:'row',

      },
      Price:
      {
          fontSize:22,
          width:180,
          textAlign:'center',
          fontWeight:'bold',
      },
      Amount:
      {
          fontSize:22,
          width:80,
          textAlign:'center',
          fontWeight:'bold',

      },
      up:
      {
          flex:2,
      },
      down:
      {
          flex:1,
          alignItems:'flex-end',
          justifyContent:'flex-end',
          marginBottom:150
      },
     
      lineBlack:
      {
          flex:1,
          height:2,
          backgroundColor:'black',
          margin:5,
      },
      lineBlackX2:
      {
          flex:2,
          height:2,
          backgroundColor:'black',
          margin:5,
      },
      
      NextButton:
      {
        width:'100%',
        height:60,
        marginBottom:25,
        backgroundColor:Color.normalColor,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
      },
      BindPrice:
      {
          flex:2,
          flexDirection:'row',
      },
      BindAmount:
      {
          flex:1,
          flexDirection:'row',
      },
      Unit:
      {
          fontSize:22,
          fontWeight:'bold',
      }
    }
)
export default SelectIdea