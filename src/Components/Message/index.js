import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from '../Wrapper'
import { Container, Title } from './styles'

function Message({ text }) {
  return (
    <Container>
      <Wrapper>
        <Title>{text}</Title>
      </Wrapper>
    </Container>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
