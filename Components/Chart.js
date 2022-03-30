import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Color from '../Data/Color';
import { PieChart } from 'react-native-chart-kit';
const Chart=()=>
{
    const c=[10,20,30]
    const datas = [
        {
          idx:1,
          name: "삼성전자",
          population: 5000,
          color: 'rgb(100,100,100)',
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "카카오",
          population: 3123,
          color: 'rgb(130,130,130)',
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
            name: "삼성화재",
            population: 4123,
            color: 'rgb(160,160,160)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
     
        
      ];
      const chartConfig = {
        backgroundGradientFrom: "#1E2910",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return(
        <PieChart
            data={datas}
            width={350}
            height={200}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            />
    )
}
export default Chart