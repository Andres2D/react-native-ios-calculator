import { useRef, useState } from 'react';

enum Operators {
    sum, subs, mult, div
}

export const useCalculator = () => {
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

  const calculate = () => {

    const numberOne = +number;
    const numberTwo = +lastNumber;

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber( `${numberOne + numberTwo}` );
        break;
      case Operators.subs:
        setNumber( `${numberTwo - numberOne}` );
        break;
      case Operators.mult:
        setNumber( `${numberOne * numberTwo}` );
        break;
      case Operators.div:
        setNumber( `${numberTwo / numberOne}` );
        break;
    }

    setLastNumber('0');
  }

  return {
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
    calculate};
}
