import React from 'react'
import { useHistory } from 'react-router-dom'
import Wrapper from '../Wrapper'
import { Container, Button } from './styles'

function Header() {
  const history = useHistory()

  const handleClick = (event) => {
    event.preventDefault()
    history.push('/')
  }

  return (
    <Container>
      <Wrapper>
        <Button type="button" onClick={handleClick}>
          Simule Novamente
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Header
