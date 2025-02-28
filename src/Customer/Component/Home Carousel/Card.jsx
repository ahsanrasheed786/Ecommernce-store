import React from 'react'

const Card = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hiddenw-[15rem] mx-3'>
<div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full'
    src={product.imageUrl}
      alt="" />
</div>

<div className='p-4'>
<h3 className='font-medium text-gray-900'>{product.brand}</h3>
<p className='mt-2 text-gray-500'>{product.title}</p>
</div>


    </div>
  )
}

export default Card