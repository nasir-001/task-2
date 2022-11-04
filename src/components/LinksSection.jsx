import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React from 'react';
import slack from '../assets/svg/slack.svg';
import github from '../assets/svg/github.svg'

const LinksSection = () => {
  return (
    <div className='lg:tw-mx-8'>
      <style type='text/css'>
        {`
          .btn-cust {
            background-color: #e5e7eb;
            color: black;
          }
          .btn-cust:hover {
            background-color: #d1d5db;
            color: black;
          }
        `}
      </style>
      <div className='tw-mx-4 md:tw-mx-12 lg:tw-w-2/3 lg:tw-mx-auto tw-mt-12'>
        <Button href="http://twitter.com/_code_for_fun" variant='cust' id='twitter' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
          <div className='tw-font-semibold tw-pt-1'>
            Twitter Link
          </div>
        </Button>
        <div className='tw-mt-4'>
          <Button href="https://training.zuri.team/" variant='cust' id='btn__zuri' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
            <div className='tw-font-semibold tw-pt-1'>
              Zuri Team
            </div>
          </Button>
        </div>
        <div className='tw-mt-4'>
          <Button href="http://books.zuri.team" variant='cust' id='books' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
            <div className='tw-font-semibold tw-pt-1'>
              Zuri Books
            </div>
          </Button>
        </div>
        <div className='tw-mt-4'>
          <Button href="https://books.zuri.team/python-for-beginners?ref_id=nasir001" variant='cust' id='book__python' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
            <div className='tw-font-semibold tw-pt-1'>
              Python Books
            </div>
          </Button>
        </div>
        <div className='tw-mt-4'>
          <Button href="https://background.zuri.team" variant='cust' id='pitch' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
            <div className='tw-font-semibold tw-pt-1'>
              Background Check for Coders
            </div>
          </Button>
        </div>
        <div className='tw-mt-4'>
          <Button href="https://books.zuri.team/design-rules" variant='cust' id='book__design' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
            <div className='tw-font-semibold tw-pt-1'>
              Design Books
            </div>
          </Button>
        </div>
        <div className='tw-mt-4'>
          <Link to='/contact' id='book__contact'>
            <Button variant='cust' className='tw-bg-gray-200 tw-text-black tw-text-center tw-w-full tw-py-3 tw-h-12 tw-rounded-lg'>
              <div className='tw-font-semibold tw-pt-1'>
                Contact
              </div>
            </Button>
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
