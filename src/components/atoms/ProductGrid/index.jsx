import React from 'react'

const ProductGrid = ({children}) => {
  return (
    <div className="flex flex-wrap">
        {children}
    </div>
  )
}

export default ProductGrid
