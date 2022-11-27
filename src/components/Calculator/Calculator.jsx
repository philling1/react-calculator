import React from 'react'
import { Container } from './Styled/Container'
import { Screen } from './Styled/Screen'
import { PreviousScreen } from './Styled/PreviousScreen'
import { CurrentScreen } from './Styled/CurrentScreen'
import { Button } from './Styled/Button'

function calculator() {
  return (
    <Container>
      <Screen>
        <PreviousScreen>10 +</PreviousScreen>
        <CurrentScreen>10</CurrentScreen>
      </Screen>
      <Button gridSpan={2} control>AC</Button>
      <Button control>DEL</Button>
      <Button operation>÷</Button>
      <Button >7</Button>
      <Button >8</Button>
      <Button >9</Button>
      <Button operation>x</Button>
      <Button >4</Button>
      <Button >5</Button>
      <Button >6</Button>
      <Button operation>+</Button>
      <Button >1</Button>
      <Button >2</Button>
      <Button >3</Button>
      <Button operation>-</Button>
      <Button period>.</Button>
      <Button >0</Button>
      <Button gridSpan={2} equals>=</Button>
    </Container>
  )
}

export default calculator