import React from 'react';

const ModalHeading = ({onClose}) => {
  return (
    <>
       <div className='p-2 flex justify-center items-center m-4 lg:mt-20 mt-10'>
          <hr className='bg-gradient-to-r from-blue-400 to-blue-500 border-0 rounded-lg h-1 lg:w-20 w-15'/>
          <h1 className="text-blue-500 roboto-black lg:text-[2rem] text-[1.2rem] text-nowrap mx-4">REFER NOW</h1>
          <hr className='bg-gradient-to-r from-blue-400 to-blue-500 border-0 rounded-lg h-1 lg:w-20 w-15'/>
      </div>

      <button onClick={onClose} className='text-blue-500 cursor-pointer font-semibold text-4xl absolute lg:top-30 top-5 lg:right-10 right-5'> &times;</button>
    </>
  )
}

export default ModalHeading