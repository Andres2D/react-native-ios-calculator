import React from 'react'
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const {
    number, 
    lastNumber,
    clear,
    positiveNegavitve,
    btnDel,
    btnDiv,
    btnSubs,
    btnMult,
    btnSum,
    buildNumber,
    calculate
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {
        (lastNumber !== '0') && (
          <Text style={styles.smallResult}>{ lastNumber }</Text>
        )
      }
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
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegavitve}/>
        <ButtonCalc text="del" color="#9B9B9B" action={btnDel}/>
        <ButtonCalc text="/" color="#FF9427" action={btnDiv} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber}/>
        <ButtonCalc text="8" action={buildNumber}/>
        <ButtonCalc text="9" action={buildNumber}/>
        <ButtonCalc text="X" color="#FF9427" action={btnMult} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber}/>
        <ButtonCalc text="5" action={buildNumber}/>
        <ButtonCalc text="6" action={buildNumber}/>
        <ButtonCalc text="-" color="#FF9427" action={btnSubs} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber}/>
        <ButtonCalc text="2" action={buildNumber}/>
        <ButtonCalc text="3" action={buildNumber}/>
        <ButtonCalc text="+" color="#FF9427" action={btnSum} />
      </View>

      {/* Buttons rows */}
      <View style={styles.row}>
        <ButtonCalc text="0" flexBut action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
      
    </View>
  )
}
