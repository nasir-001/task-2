import React from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className='tw-mx-4 sm:tw-w-4/5 lg:tw-w-3/6 sm:tw-mx-auto'>
      <div className='tw-mt-24'>
        <div className='tw-text-4xl tw-font-semibold'>
          Contact Me
        </div>
        <div className='tw-text-gray-600 tw-pt-2 tw-text-lg'>
          Hi there, contact me to ask me about anything you have in mind
        </div>
      </div>
      <Form className='tw-mt-12'>
        <div className='sm:tw-flex tw-justify-center'>
          <Form.Group className="tw-mb-3 tw-w-full sm:tw-mr-4" controlId="first_name">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Form.Group>
          <Form.Group className="tw-mb-3 tw-w-full sm:tw-ml-4" controlId="last_name">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Form.Group>
        </div>
        <Form.Group className="tw-mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="yourname@gmail.com" />
        </Form.Group>
        <Form.Label>Message</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Send a message and I'll reply as soon as possible...">
          <Form.Control
            as="textarea"
            placeholder="Send a message and I'll reply as soon as possible..."
            style={{ height: '130px' }}
          />
        </FloatingLabel>
        <Form.Check
          controlId='message'
          className='tw-mt-4'
          type='checkbox'
          id={`default-checkbox`}
          label={`You agree to providing your data to Nasir who may contact you.`}
        />
        <Button variant='primary' controlId='btn__submit' className='tw-mt-4 tw-w-full'>Send Message</Button>
      </Form>
    </div>
  )
}

export default Contact
