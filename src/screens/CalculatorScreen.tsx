import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const clear = () => {
    setNumber('0');
  }

  const buildNumber = (numberText: string) => {
    setNumber(number + numberText);
  }

  return (
    <View style={styles.calcContainer}>
      <Text style={styles.smallResult}>{ lastNumber }</Text>
      <Text 
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        { number }
      </Text>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clear}/>
        <ButtonCalc text="+/-" color="#9B9B9B" action={clear}/>
        <ButtonCalc text="del" color="#9B9B9B" action={clear}/>
        <ButtonCalc text="/" color="#FF9427" action={clear} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber}/>
        <ButtonCalc text="8" action={buildNumber}/>
        <ButtonCalc text="9" action={buildNumber}/>
        <ButtonCalc text="X" color="#FF9427" action={clear} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber}/>
        <ButtonCalc text="5" action={buildNumber}/>
        <ButtonCalc text="6" action={buildNumber}/>
        <ButtonCalc text="-" color="#FF9427" action={clear} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber}/>
        <ButtonCalc text="2" action={buildNumber}/>
        <ButtonCalc text="3" action={buildNumber}/>
        <ButtonCalc text="+" color="#FF9427" action={clear} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="0" flexBut action={clear} />
        <ButtonCalc text="." action={clear} />
        <ButtonCalc text="=" color="#FF9427" action={clear} />
      </View>
      
    </View>
  )
}
