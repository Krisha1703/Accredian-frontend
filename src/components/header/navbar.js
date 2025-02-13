import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  return (
    <div className='w-5/6 mx-auto my-5'>
        <div className='flex justify-between items-center'>
            
            <div className='flex  space-x-25 lg:space-x-4 justify-center items-center'>
                <img src='/logo.png' width={100} height={100} alt='logo'/>
                <button className='bg-blue-500 px-4 text-white p-2 rounded-sm cursor-pointer'>
                    Courses
                    <ExpandMoreIcon />
                </button>
            </div>

            <div className=' space-x-4 justify-center items-center lg:flex hidden'>
                <h1 className='cursor-pointer hover:bg-blue-500 hover:text-white hover:p-2 hover:rounded-sm '>Refer & Earn</h1>
                <h1 className='cursor-pointer hover:bg-blue-500 hover:text-white hover:p-2 hover:rounded-sm '>Resources</h1>
                <h1 className='cursor-pointer hover:bg-blue-500 hover:text-white hover:p-2 hover:rounded-sm '>About Us</h1>
                <button className='bg-gray-200 px-4 p-2 rounded-sm'>Login</button>
                <button className='bg-blue-500 px-4 text-white p-2 rounded-sm'>Try for free</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar