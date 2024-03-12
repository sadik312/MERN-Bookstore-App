// Reusable component creating a button to back to the bookslist

import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import React from 'react'

const BackButton = ({ destination = '/', id }) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' id={id}>
            <BsArrowLeft className='text-2xl' />
        </Link>
    </div>
  )
}

export default BackButton