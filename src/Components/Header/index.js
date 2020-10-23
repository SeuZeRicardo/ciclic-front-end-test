import React from 'react'
import { Container } from './styles'
import Wrapper from '../Wrapper'
import image from '../../Assets/ciclic-logo.png'

function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={image} alt="Ciclic Logo" />
      </Wrapper>
    </Container>
  )
}

export default Header
