import {Text,View,StyleSheet,TextInput,TouchableOpacity, ScrollView,Button} from 'react-native'
import {useState,useEffect} from 'react'
import Color from '../Data/Color'
import DateTimePicker from '@react-native-community/datetimepicker'
const SelectDate=({navigation})=>
{
    ////
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
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
            <Text style={styles.SelectDateQuestion}>언제 구매하셨나요?</Text>
            <Text style={styles.SelectDateText}>구매일자</Text>
            <TouchableOpacity style={styles.SelectDateBox} onPress={()=>{show?setShow(false):setShow(true)}}>
                <Text style={styles.Year}>{date.getFullYear()} 년</Text>
                <Text style={styles.Month}>{date.getMonth()+1} 월</Text>
                <Text style={styles.Day}>{date.getDate()} 일</Text>
            </TouchableOpacity>
            <View style={styles.SelectDateBox}>
                <View style={styles.lineBlackX2}></View>
                <View style={styles.lineBlack}></View>
                <View style={styles.lineBlack}></View>
            </View>
            
            {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
        </View>
            <View style={styles.down}>
                <TouchableOpacity onPress={()=>{navigation.navigate('SelectPrice')}} style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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
      SelectDateQuestion:
      {
          marginTop:114,
          fontSize:24,
          fontWeight:'bold',
      },
      SelectDateText:
      {
          marginTop:30,
          fontSize:12,
          color:'rgba(196,196,196,1)',
          marginBottom:10,
      },
      
      SelectDateBox:
      {

          flexDirection:'row',

      },
      Year:
      {
          flex:2,
          fontSize:22,
          width:132,
          textAlign:'center',
          fontWeight:'bold',
          marginRight:15,
      },
      Month:
      {
          flex:1,
          fontSize:22,
          width:62,
          textAlign:'center',
          fontWeight:'bold',
          marginRight:10,
      },
      Day:
      {
          flex:1,
          fontSize:22,
          width:62,
          textAlign:'center',
          fontWeight:'bold',
          marginRight:5,
      },
      up:
      {
          flex:1,
      },
      down:
      {
          flex:1,
          alignItems:'flex-end',
          justifyContent:'flex-end',
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
      }
    }
)
export default SelectDate