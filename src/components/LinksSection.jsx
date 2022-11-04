import { Route, Link } from 'react-router-dom';
import React from 'react';
import slack from '../assets/svg/slack.svg';
import github from '../assets/svg/github.svg'

const LinksSection = () => {
  return (
    <div className='lg:tw-mx-8'>
      <div className='tw-mx-4 md:tw-mx-12 lg:tw-w-2/3 lg:tw-mx-auto tw-mt-12'>
        <a className='tw-font-semibold' id='twitter' href="http://twitter.com/_code_for_fun" target="_blank" rel="noopener noreferrer">
          <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
            Twitter Link
          </div>
        </a>
        <div className='tw-mt-4'>
          <a type='submit' className='tw-font-semibold' id='btn__zuri' href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer">
            <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
              Zuri Team
            </div>
          </a>
        </div>
        <div className='tw-mt-4'>
          <a type='submit' className='tw-font-semibold' id='books' href="http://books.zuri.team" target="_blank" rel="noopener noreferrer">
            <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
              Zuri Books
            </div>
          </a>
        </div>
        <div className='tw-mt-4'>
          <a type='submit' className='tw-font-semibold' id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=Nasir" target="_blank" rel="noopener noreferrer">
            <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
              Python Books
            </div>
          </a>
        </div>
        <div className='tw-mt-4'>
          <a type='submit' className='tw-font-semibold' id='pitch' href="https://background.zuri.team" target="_blank" rel="noopener noreferrer">
            <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
              Background Check for Coders
            </div>
          </a>
        </div>
        <div className='tw-mt-4'>
          <a type='submit' className='tw-font-semibold' id='book__design' href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer">
            <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
              Design Books
            </div>
          </a>
        </div>
        <div className='tw-mt-4'>
          <Link to='/contact' id='book__design'>
            <a className='tw-font-semibold'>
              <div className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
                Contact
              </div>
            </a>
          </Link>
        </div>
        <div className='tw-flex tw-justify-center tw-mt-8'>
          <div className='tw-mx-2'>
            <a href="https://hng9.slack.com/archives/D0487REQHD5" target="_blank" rel="noopener noreferrer">
              <img src={slack} alt="slack" />
            </a>
          </div>
          <div className='tw-mx-2'>
            <a href="https://github.com/nasir-001" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinksSection
