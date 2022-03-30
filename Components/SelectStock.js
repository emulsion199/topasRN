import {Text,View,StyleSheet,TextInput,TouchableOpacity, ScrollView} from 'react-native'
import {useState,useEffect} from 'react'
import Color from '../Data/Color'
const SelectStock=({navigation})=>
{
    //Make StockName List//
    const stockNameJson=require('../Data/finance_name.json')
    const financeList=[]
    const reverseDict={} // 주식이름: ticker 로 이루어진 object //
    const ticker=Object.keys(stockNameJson)
    for (var i=0;i<ticker.length;i++)
    {
        financeList.push(stockNameJson[ticker[i]])
        reverseDict[stockNameJson[ticker[i]]]=ticker[i]
    }
    financeList.sort()
    //State Value//
    const [stockName,setStockName]=useState("")
    const [typing,setTyping]=useState(0)
    //State Cycle//
    useEffect(()=>
    {
        if(stockName==""){setTyping(0)}
        else{setTyping(1)}
    }
    ,[stockName])
    return (
        <View style={styles.container}>
            <Text style={styles.SelectStockQuestion}>어떤 종목을 구매하셨나요?</Text>
            <Text style={typing ? styles.StockNameText:styles.StockNameTextInvisible}>종목이름</Text>
            <View style={styles.StockNameInputBox}>
                <TextInput style={styles.StockTextInput} placeholder="종목 이름" value={stockName} onChangeText={(Text)=>setStockName(Text)}></TextInput>
                {typing?<TouchableOpacity onPress={()=>{setStockName("")}} style={styles.StockNameInitButton}><Text style={styles.StockNameInitButtonX}>×</Text></TouchableOpacity>:null}
            </View>
            <View style={typing ? styles.lineBlack:styles.lineGray}></View>
            <ScrollView style={{marginBottom:10, marginTop:10}}>
                {stockName==""? null: financeList.map((data,idx)=>{if(data.indexOf(stockName)!=-1){return(
                <TouchableOpacity key={idx} style={styles.StockAutoBox} onPress={()=>{setStockName(data)}}><Text style={styles.StockAutoText}>{data}</Text></TouchableOpacity>)}})}
            </ScrollView>
            <TouchableOpacity onPress={()=>{navigation.navigate('SelectDate')}} style={styles.NextButton}><Text>다음</Text></TouchableOpacity>
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
      SelectStockQuestion:
      {
          marginTop:114,
          fontSize:24,
          fontWeight:'bold',
      },
      StockNameText:
      {
          marginTop:30,
          fontSize:12,
          color:'rgba(196,196,196,1)',
      },
      StockNameTextInvisible:
      {
          marginTop:30,
          fontSize:12,
          color:'rgba(196,196,196,0)',
      },
      StockNameInputBox:
      {
          flexDirection:'row',
      },
      StockTextInput:
      {
          width:100,
          flex:1,
          height:40,
          fontSize:20,
      },
      
      StockNameInitButton:
      {
          width:20,
          height:20,
          marginTop:10,
          backgroundColor:'lightgray',
          borderRadius:100,
          alignItems:'center',
      },
      StockNameInitButtonX:
      {
          color:'white',
          fontSize:15
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
      StockAutoBox:
      {
          height:60,
          marginTop:10,
          backgroundColor:Color.normalColor,
          alignItems:'center',
          borderRadius:100,
          justifyContent:'center',
      },
      StockAutoText:
      {
          fontSize:20,
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
export default SelectStock