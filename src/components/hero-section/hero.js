import React from 'react'
import ReferModal from '../refer-modal/refer-modal'
import { useState, useEffect } from "react";


const Hero = () => {
    const [showReferModal, setShowReferModal] = useState(false);
    const handleModalToggle = () => {
        setShowReferModal((prev) => !prev);
      };
     // Disable background scrolling when modal is open
    useEffect(() => {
        if (showReferModal) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }
    }, [showReferModal]);

  return (
    <div className='w-11/12 mx-auto'>
        <img src='/hero-image.png' width={1500} height={1500} alt='hero' className='relative z-0'/>
        <button onClick={handleModalToggle} className='bg-blue-500 px-4 cursor-pointer text-white p-2 rounded-sm absolute lg:bottom-[-25vh] lg:left-40 bottom-[36.5vh] left-10 z-10 lg:scale-100 scale-75'>Refer Now</button>
        
        { showReferModal && (
            <ReferModal  onClose={() => setShowReferModal(false)}/>
        )}
    </div>
  )
}

export default Hero