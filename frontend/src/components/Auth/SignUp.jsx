import { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formData.password === formData.confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [formData.password, formData.confirmPassword]);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/users/signUp',
        formData
      );
      const token = response.data.token;
      console.log('token:', token); // You can store the token in localStorage or context for further use
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-6'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-y-4 text-black'>
            <div className=''>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'
              >
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                required
                onChange={handleChange}
                value={'' || formData.firstName}
                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'
              >
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                required
                onChange={handleChange}
                value={'' || formData.lastName}
                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              onChange={handleChange}
              value={'' || formData.email}
              className='text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              value={'' || formData.password}
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              onChange={handleChange}
              className='text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div>
            <label
              htmlFor='confirmPassword'
              value={'' || formData.confirmPassword}
              className='block text-sm font-medium text-gray-700'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              required
              onChange={handleChange}
              className='text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div>
            <button
              type='submit'
              disabled={!passwordMatch}
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
