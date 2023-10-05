import React from 'react'

const CircularButton = ({children, className,...restProp}) => {
  return (
    <button {...restProp} className={className}>
        {children}
    </button>
  )
}

export default CircularButton;