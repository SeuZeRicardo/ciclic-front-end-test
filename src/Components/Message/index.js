import React from 'react'
import PropTypes from 'prop-types'

function Message({ text }) {
  return (
    <>
      <p>{text}</p>
    </>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
