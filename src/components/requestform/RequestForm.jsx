import React, { useState } from 'react';
import './RequestForm.css';
import axios from 'axios';

function RequestForm({ setShowConfetti }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [resMessage, setResMessage] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://jack-node-js-e202b53f8dad.herokuapp.com/send/',
        {
          name,
          email,
          phone,
          message,
        }
      );
      setResMessage(response.data);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.log('Something went wrong!', error);
    }
  };

  return (
    <div className='request-container'>
      <form onSubmit={handleSubmit} className='request-form'>
        <h2 className='request-title'>
          Share Your Ideas and Suggestions! I'll Get in Touch.
        </h2>
        <label className='request-form__name ' htmlFor='name'>
          <input
            id='name'
            className='form-input'
            type='text'
            placeholder='Name'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className='request-form__email' htmlFor='email'>
          <input
            id='email'
            className='form-input'
            type='email'
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <span className='request-form__example'>
            For example: zafarzhon77@gmail.com
          </span>
        </label>
        <label className='request-form__phone ' htmlFor='phone'>
          <input
            id='phone'
            className='form-input'
            type='text'
            placeholder='Phone'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
        </label>
        <label className='request-form__message ' htmlFor='message'>
          <textarea
            id='message'
            className='form-input'
            type='text'
            placeholder='Message'
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </label>
        <button type='submit' className='btn-submit'>
          Submit
        </button>
        <div className='request-form__resMessage'>{resMessage}</div>
      </form>
    </div>
  );
}

export default RequestForm;
