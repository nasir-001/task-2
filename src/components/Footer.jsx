import React from 'react';
import ingressive from '../assets/img/ingressive.png';
import zuri from '../assets/img/zuri.png';

const Footer = () => {
  return (
    <div className='tw-mx-4 md:tw-mx-12 lg:tw-w-2/3 lg:tw-mx-auto tw-mt-12 tw-border-t tw-border-gray-200'>
      <div className='md:tw-flex tw-pb-5 tw-justify-between tw-mt-7'>
        <div>
          <img src={zuri} alt="" />
        </div>
        <div className='tw-text-gray-500 tw-pt-4 md:tw-pt-0'>
          HNG Internship 9 Frontend Task
        </div>
        <div className='tw-pt-4 md:tw-pt-0'>
          <img src={ingressive} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
