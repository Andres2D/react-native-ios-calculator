import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

enum Operators {
  sum, subs, mult, div
}

export const CalculatorScreen = () => {

  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setLastNumber('0');
  }

  const buildNumber = (numberText: string) => {
    
    // not enable double dot
    if(number.includes('.') && numberText === '.') return;

    if(number.startsWith('0') || number.startsWith('-0')) {

      if(numberText === '.') {
        setNumber(number + numberText);
        
        // Evaluate if is another cero and one dot
      }else if(numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      
        // Evaluate if is different of cero and doesn't have a dot
      }else if(numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        
        // avoid 00000.0
      } else if(numberText === '0' && !number.includes('.')){
        setNumber(number);
      }else {
        setNumber(number + numberText);
      }

    } else {
      setNumber(number + numberText);
    }

  }

  const btnDel = () => {
    if(number.length > 1) {
      if(number.length === 2 && number.includes('-')) {
        setNumber('0');
      }else {
        setNumber(number.slice(0, -1 ));
      }
    }else {
      setNumber('0');
    }
  }

  const positiveNegavitve = () => {
    number.includes('-') ? setNumber(number.replace('-', '')) : setNumber(`-${number}`);
  }

  const changeNumByLast = () => {
    if(number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    }
    setLastNumber(number);
    setNumber('0');
  }

  const btnDiv = () => {
    changeNumByLast();
    lastOperation.current = Operators.div;
  }

  const btnMult = () => {
    changeNumByLast();
    lastOperation.current = Operators.mult;
  }

  const btnSubs = () => {
    changeNumByLast();
    lastOperation.current = Operators.subs;
  }

  const btnSum = () => {
    changeNumByLast();
    lastOperation.current = Operators.sum;
  }

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
        <ButtonCalc text="=" color="#FF9427" action={clear} />
      </View>
      
    </View>
  )
}
