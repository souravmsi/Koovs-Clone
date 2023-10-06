import React from 'react'

const Input = React.forwardRef((props, ref) => {
  const {...restProps} = props;
  return (
    <input ref={ref} {...restProps} className='w-full text-xs outline outline-1 outline-gray-300 rounded-sm focus-visible:outline-black focus-visible:outline-1 p-2 placeholder:text-xs'/>
  )
});

Input.displayName = 'customInput'

export default Input;