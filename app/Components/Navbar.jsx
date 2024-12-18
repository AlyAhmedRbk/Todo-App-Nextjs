import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap items-center justify-around bg-blue-500 h-14 text-white'>
      <h1 className='text-lg font-semibold'>Todo App</h1>

      <ul className='flex gap-[40px] text-md'>
        <li className='cursor-pointer hover:border-b'>Home</li>
        <li className='cursor-pointer hover:border-b'>Products</li>
        <li className='cursor-pointer hover:border-b'>About</li>
        <li className='cursor-pointer hover:border-b'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
