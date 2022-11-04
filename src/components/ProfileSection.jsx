import image from '../assets/img/nasir.jpg';
import share from '../assets/svg/share.svg';
import elipsis from '../assets/svg/elipsis.svg';

import React from 'react'

const ProfileSection = () => {
  return (
    <div className='tw-mt-14'>
      <div className='tw-flex'>
        <div className='tw-w-1/2'></div>
        <div className='tw-flex -tw-ml-12'>
          <div>
            <img src={image} className='tw-mx-auto tw-w-20 tw-h-2w-20 tw-rounded-full' />
          </div>
          <div className='tw-w-10 tw-h-10 md:tw-w-12 md md:tw-h-12 tw-ml-14 lg:tw-ml-56 tw-rounded-full tw-border tw-border-gray-200 tw-border-dashed tw-cursor-pointer'>
            <img id='profile__img' src={share} alt="share" className='tw-m-3.5 tw-hidden md:tw-block' />
            <img id='profile__img' src={elipsis} alt="share" className='tw-mx-3 tw-mt-4 md:tw-hidden' />
          </div>
        </div>
      </div>
      <div className='tw-pt-2 tw-text-center tw-text-2xl tw-font-semibold -tw-ml-2'>
        Nasir Lawal
      </div>
    </div>
  )
}

export default ProfileSection
