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
    //Make Reason List//
   
    //State Value//
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [Reason,setReason]=useState("")
    const [typing,setTyping]=useState(0)
    //State Cycle//
    useEffect(()=>
    {
        if(Reason==""){setTyping(0)}
        else{setTyping(1)}
    }
    ,[Reason])
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <Text style={styles.SelectDateQuestion}>구매하신 이유를 알려주세요</Text>
            </View>
            <View style={styles.ReasonInputBox}>
                <TextInput style={styles.StockTextInput} placeholder="구체적인 투자 포인트가 있나요?" value={Reason} onChangeText={(Text)=>setReason(Text)}></TextInput>
                {typing?<TouchableOpacity onPress={()=>{setReason("")}} style={styles.ReasonInitButton}><Text style={styles.ReasonInitButtonX}>×</Text></TouchableOpacity>:null}
            </View>
            <View style={typing ? styles.lineBlack:styles.lineGray}></View>
            <View style={styles.down}>
                <TouchableOpacity onPress={()=>{navigation.navigate('SelectFeeling')}} style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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
          marginTop:70,
          marginLeft:10,
          fontSize:24,
          fontWeight:'bold',
      },
      ReasonInputBox:
      {
          flexDirection:'row',
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
      StockTextInput:
      {
          width:100,
          marginLeft:10,
          flex:1,
          height:40,
          fontSize:20,
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
      },
      lineBlack:
      {
          width:'100%',
          height:2,
          backgroundColor:'black',
      },
      lineGray:
      {
          width:'100%',
          height:2,
          backgroundColor:'lightgray',
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