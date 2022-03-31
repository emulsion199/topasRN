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
                <Text style={styles.SelectDateQuestion}>구매할 때 감정은 어떘나요?</Text>
                <TagBox tagData={[{title:'덤덤해요 😌'},{title:'뿌듯해요 ☺️'},{title:'조급해요 😳'},{title:'자랑하고 싶어요 😙'},{title:'용기 냈어요 😲'},{title:'아쉬워요 😧'},{title:'후회돼요 😢'},{title:'공포스러워요 😨'}]}></TagBox>

            </View>
            <View style={styles.down}>
                <TouchableOpacity onPress={()=>{navigation.navigate('RecordEval')}} style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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