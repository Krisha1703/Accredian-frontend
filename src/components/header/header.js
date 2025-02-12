import React from 'react'
import Navbar from './navbar'

const header = () => {
  return (
    <div>
        <div className='bg-blue-100  p-3 w-full items-center justify-center flex space-x-4'>
            <p>Navigate your ideal career path with tailored expert advice</p>
            <p className='text-blue-500 font-semibold'>Contact Expert</p>
        </div>

        <Navbar />

        <div className='bg-blue-100 p-3 px-6 mt-10 mb-5 rounded-full justify-between flex lg:w-1/2 w-11/12 mx-auto'>
            <h1>Refer</h1>
            <h1>Benefits</h1>
            <h1>FAQs</h1>
            <h1>Support</h1>
        </div>

    </div>
  )
}

export default header