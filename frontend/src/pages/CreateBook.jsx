import React, { useState } from 'react'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  // states for CreateBook
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // function to handle book create operation
  const handleSaveBook = () => {
    // data object
    const data = {
      title,
      author,
      publicYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occured, Please check console output');
      });
  };
  return (
    <div>CreateBook</div>
  )
}

export default CreateBook