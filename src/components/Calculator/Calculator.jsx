import React from 'react'
import { Container } from './Styled/Container'
import { Screen } from './Styled/Screen'
import { PreviousScreen } from './Styled/PreviousScreen'
import { CurrentScreen } from './Styled/CurrentScreen'

function calculator() {
  return (
    <Container>
      <Screen>
        <PreviousScreen>10 +</PreviousScreen>
        <CurrentScreen>10</CurrentScreen>
      </Screen>
    </Container>
  )
}

export default calculator