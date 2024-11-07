import React from 'react'

const QuantityControl = () => {
  return (
    <div className='bg-light-grey flex gap-x-7 items-center px-5 py-2 cursor-pointer'>
        <p className='cursor-pointer hover:text-primary font-semibold transition-all duration-300 ease-in-out px-1 text-dark-grey py-2'>-</p>
        <p className='font-semibold'>1</p>
        <p className='cursor-pointer hover:text-primary font-semibold transition-all duration-300 ease-in-out px-1 text-dark-grey py-2'>+</p>
    </div>
  )
}

export default QuantityControl