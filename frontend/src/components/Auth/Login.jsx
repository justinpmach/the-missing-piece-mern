import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../../features/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert('ERROR:', message);
    }
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(login(userData));
  };

  if (isLoading) return <div>Loading...</div>;
  // try {
  //   const response = await axios.post(
  //     'http://localhost:3000/users/signIn',
  //     formData
  //   );
  //   const token = response.data.token;
  //   console.log('token:', token); // You can store the token in localStorage or context for further use
  //   history.push('/nisuuuu');
  // } catch (error) {
  //   console.error(error);
  // }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-6'>
        <form onSubmit={handleSubmit} className='space-y-4'>
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
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
