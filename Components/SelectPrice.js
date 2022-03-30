import {Text,View,StyleSheet,TextInput,TouchableOpacity, ScrollView,Button} from 'react-native'
import {useState,useEffect} from 'react'
import Color from '../Data/Color'
import TagBox from './TagBox';
const SelectPrice=()=>
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
                <Text style={styles.SelectDateQuestion}>얼마에 구매하셨나요?</Text>
                <Text style={styles.SelectDateText}>구매가격</Text>
                <View style={styles.SelectDateBox}>
                    <View style={styles.BindPrice}>
                        <TextInput style={styles.Price}  keyboardType = 'numeric'></TextInput>
                        <Text style={styles.Unit}>원</Text>
                    </View>
                    <View style={styles.BindAmount}>
                        <TextInput style={styles.Amount}  keyboardType = 'numeric'></TextInput>
                        <Text style={styles.Unit}>주</Text>
                    </View>
                </View>
                <View style={styles.SelectDateBox}>
                    <View style={styles.lineBlackX2}></View>
                    <View style={styles.lineBlack}></View>
                </View>

                <Text style={styles.SelectDateQuestion}>어떤 돈으로 구매하셨나요?</Text>
                <TagBox tagData={[{title:'월급'},{title:'용돈'},{title:'보너스테스트테스트테스틑'},{title:'대출'}]}></TagBox>

            </View>
            <View style={styles.down}>
                <TouchableOpacity style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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
export default SelectPrice