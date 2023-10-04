'use client'
import React, { useState } from 'react'
import Color from './Color'

const Swatch = ({colors}) => {
    const [selected, setSelected] = useState(0);

    const onClickHandler = (index) => {
        setSelected(index);
    }
  return (
    <div className='flex gap-x-3 mt-3'>
      {colors.map((item, index) => <Color key={index+1} color={item} selected={selected} index={index} onClick = {onClickHandler}/>)}
    </div>
  )
}

export default Swatch
