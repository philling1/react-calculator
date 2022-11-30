import React, { useState} from 'react'
import { Container } from './Styled/Container'
import { Screen } from './Styled/Screen'
import { PreviousScreen } from './Styled/PreviousScreen'
import { CurrentScreen } from './Styled/CurrentScreen'
import { Button } from './Styled/Button'

function Calculator() {

  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('')
  const [operation, setOperation] = useState('')

  const appendValue = (num) => {
    const value = num.target.getAttribute('data')

    if(value === '.' && current.includes('.')) return

    setCurrent(current + value)
    console.log(value)
  }

  const handleDelete = () => {

    setCurrent(String(current).slice(0, -1));

  }

  const handleAllClear = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')

  }

  const chooseOperation = (btn) => {
    if(current === '') return
    if(previous !== ''){
      let value = compute();
      setPrevious(value);
    }else{
      setPrevious(current)
    }

    setCurrent('')
    setOperation(btn.target.getAttribute('data'))
  }

  const getSoln = () => {
    let value = compute();
    if(value === undefined || value === null) return
    
    setCurrent(value)
    setPrevious('')
    setOperation('')

  }

  const compute = () => {
    let result;
    let prevNumber = parseFloat(previous)
    let currentNumber = parseFloat(current)

    if(isNaN(prevNumber) || isNaN(currentNumber)) return

    switch(operation) {
      case '÷':
        result = prevNumber / currentNumber;
        break;
      case 'x':
        result = prevNumber * currentNumber;
        break;
      case '+':
        result = prevNumber + currentNumber;
        break;
      case '-':
        result = prevNumber - currentNumber;
        break;
      default:
        return
    }

    return result;

  }

  return (
    <Container>
      <Screen>
        <PreviousScreen>{previous} {operation}</PreviousScreen>
        <CurrentScreen>{current}</CurrentScreen>
      </Screen>
      <Button onClick={handleAllClear} gridSpan={2} control>AC</Button>
      <Button onClick={handleDelete} control>DEL</Button>
      <Button data={'÷'} onClick={chooseOperation} operation>÷</Button>
      <Button data={'7'} onClick={appendValue}>7</Button>
      <Button data={'8'} onClick={appendValue}>8</Button>
      <Button data={'9'} onClick={appendValue}>9</Button>
      <Button data={'x'} onClick={chooseOperation}  operation>x</Button>
      <Button data={'4'} onClick={appendValue}>4</Button>
      <Button data={'5'} onClick={appendValue}>5</Button>
      <Button data={'6'} onClick={appendValue}>6</Button>
      <Button data={'+'} onClick={chooseOperation}  operation>+</Button>
      <Button data={'1'} onClick={appendValue}>1</Button>
      <Button data={'2'} onClick={appendValue}>2</Button>
      <Button data={'3'} onClick={appendValue}>3</Button>
      <Button data={'-'} onClick={chooseOperation}  operation>-</Button>
      <Button data={'.'} onClick={appendValue} period>.</Button>
      <Button data={'0'} onClick={appendValue}>0</Button>
      <Button gridSpan={2} onClick={getSoln} equals>=</Button>
    </Container>
  )
}

export default Calculator