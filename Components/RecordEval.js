import {Text,View,StyleSheet,TextInput,TouchableOpacity, ScrollView,Button} from 'react-native'
import {useState,useEffect} from 'react'
import Color from '../Data/Color'
//import CheckBox from '@react-native-community/checkbox';
const RecordEval=({navigation})=>
{
    ////
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(currentDate)
      };

    // for checkbox
    //const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>


    //State Value//
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [Memo,setMemo]=useState("")
    const [typing,setTyping]=useState(0)

    //State Cycle//
    useEffect(()=>
    {
        if(Memo==""){setTyping(0)}
        else{setTyping(1)}
    }
    ,[Memo])
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <Text style={styles.SelectDateQuestion}>이번 거래를 평가해주세요</Text>
            </View>
            <View style={styles.up}>
                <Text style={styles.SelectDateQuestion}>지켜진 원칙을 체크해주세요</Text>
            </View>
            <Text style={styles.Check}>원칙설명 원칙설명 원칙설명</Text>
            <Text style={styles.Check}>원칙설명 원칙설명 원칙설명</Text>
            <Text style={styles.Check}>원칙설명 원칙설명 원칙설명</Text>
            <View style={styles.MemoInputBox}>
                <TextInput style={styles.StockTextInput} placeholder="메모" value={Memo} onChangeText={(Text)=>setMemo(Text)}></TextInput>
                {typing?<TouchableOpacity onPress={()=>{setMemo("")}} style={styles.MemoInitButton}><Text style={styles.MemoInitButtonX}>×</Text></TouchableOpacity>:null}
            </View>
            <View style={typing ? styles.lineBlack:styles.lineGray}></View>
            <View style={styles.down}>
                <TouchableOpacity onPress={()=>{navigation.navigate('RecordEnd')}} style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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
      MemoInputBox:
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
      Check:
      {
          width:100,
          marginLeft:10,
          flex:1,
          height:40,
          fontSize:20,
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
export default RecordEval