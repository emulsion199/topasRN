import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Color from '../Data/Color';
import { PieChart } from 'react-native-chart-kit';
import Chart from './Chart';

const HomeScreen=({navigation})=>
{
    //chart//
    

    return(
        <View style={styles.container}>
            

        <View style={styles.upComponent}>
            <View style={styles.totalAssetBox}>
                <Text style={styles.totalAssetText}>파스님의 총 자산</Text>
                <Text style={styles.totalAssetAmount}>1,123,123원</Text>
            </View>

            <View style={styles.chart}>
                <Chart></Chart>
            </View>
        </View>

        <View style={styles.downComponent}>
            <View style={styles.sellAndBuyBox}>
                <TouchableOpacity onPress={()=>{navigation.navigate('SelectStock')}} style={styles.sellAndBuyButton}><Text>매수 기록</Text></TouchableOpacity>
                <TouchableOpacity style={styles.sellAndBuyButton}><Text>매도 기록</Text></TouchableOpacity>
            </View>
        </View>

        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:
        {
            backgroundColor:'white',
            flex:1,
            alignItems:'center',
        },
        upComponent:
        {
            flex:1,
            alignItems:'flex-start'
        },
        downComponent:
        {
            flex:1,
            justifyContent:'flex-end',
            marginBottom:50
        },
        totalAssetBox:
        {
            width: '90%',
            height:60,
            margin:20,
            alignItems:'center',
            backgroundColor:Color.normalColor,
            borderRadius:20,
            flexDirection:'row',
        },
        totalAssetText:
        {
            paddingLeft:15,
            flex:1,
            fontSize:18
        },
        totalAssetAmount:
        {
            paddingRight:10,
            flex:1,
            textAlign:'right',
            fontWeight:'bold',
            fontSize:24
        },
        sellAndBuyBox:
        {
            width:'90%',
            flexDirection:'row',
            justifyContent:'flex-end'
        },
        sellAndBuyButton:
        {
            flex:1,
            height:60,
            backgroundColor:Color.normalColor,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
        },
        chart:
        {
            alignItems:'center',
            justifyContent:'center',
            marginLeft:20
        }
    }
)
export default HomeScreen