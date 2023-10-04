import React from 'react'

const CircularButton = ({children, ...restProp}) => {
  return (
    <button {...restProp} className="group-hover:bg-black group-hover:text-white absolute bottom-6 right-8 bg-white font-semibold rounded-full p-4 hover:scale-125 hover:bg-black hover:text-white transition-all duration-500">
        {children}
    </button>
  )
}

export default CircularButton;