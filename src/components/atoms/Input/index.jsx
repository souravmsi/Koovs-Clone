import React from 'react'

const Input = ({...restProps}) => {
  return (
    <input {...restProps} className='w-full text-xs outline outline-1 outline-gray-300 rounded-sm focus-visible:outline-black focus-visible:outline-1 p-2 placeholder:text-xs'/>
  )
}

export default Input;