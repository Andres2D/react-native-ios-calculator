import React from 'react'
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
      <Text style={styles.smallResult}>1,500.00 </Text>
      <Text style={styles.result}>1,500.00 </Text>

      <View style={styles.row}>

        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
    </View>
  )
}
