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
                <Text style={styles.SelectDateQuestion}>어디서 아이디어를 얻었나요?</Text>
                <TagBox tagData={[{title:'지인의 추천으로'},{title:'전문가의 추천으로'},{title:'뉴스를 보고'},{title:'분석 리포트를 읽고'},{title:'다른 투자자의 분석 글을 보고'},{title:'시장에서 핫한 종목을 보고'},{title:'혼자 보다가'},{title:'관심 종목을 보다가'},{title:'일상에서'},{title:'퀸트스크리닝을 하다가'},{title:'기타'}]}></TagBox>

            </View>
            <View style={styles.down}>
                <TouchableOpacity onPress={()=>{navigation.navigate('TypeReason')}} style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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
      SelectDateText:
      {
          marginTop:30,
          fontSize:12,
          color:'rgba(196,196,196,1)',
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