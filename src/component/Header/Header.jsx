import React from 'react'

const Header = () => {
  return (
    <div className='bg-red-100 w-full h-14 flex justify-between items-center sticky top-0'>
      <div>
       <h1 className='pl-32 text-cyan-600 font-serif font-extrabold text-4xl'>Cosmetic Beauty</h1>
      </div>
      <nav>
        <ul className='flex justify-around pr-12 font-bold text-lg'>
          <li className='mr-5'>Home</li>
          <li className='mr-5'>Products</li>
          <li className='mr-5'>Contact</li>
          <li className='mr-5'>Login</li>
          <li>Registration</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
