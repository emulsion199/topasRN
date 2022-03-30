import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

import Color from '../Data/Color'
const TagBox=(params)=>
{
    const data=params.tagData
    return(
        <View style={styles.container}>
            {data.map((item,idx) => {return(<TouchableOpacity key={idx} style={styles.tagBox}><Text>{item.title}</Text></TouchableOpacity>)})}
        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:'row',
            flexWrap:'wrap',
            height:300,
        },
        tagBox:{
            minWidth:80,
            padding:10,
            height:39,
            backgroundColor:Color.normalColor,
            borderRadius:100,
            alignItems:'center',
            justifyContent:'center',
            margin:5,
        }
    }
)
export default TagBox