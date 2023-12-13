import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../../features/goals/goalSlice';

function BucketListForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('GOAL TEXT: ', text);
    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <div className='max-w-md w-full rounded-lg shadow-md p-6 bg-gradient-to-l from-gray-300/10 via-blue-300/20 to-purple-200/10'>
      <form id='bucket-list-form' onSubmit={handleSubmit}>
        <div className=''>
          <label
            htmlFor='bucket-list-input'
            className='block text-sm font-medium text-gray-700'
          >
            Add something to your bucket list!
          </label>
          <input
            id='bucket-list-input'
            type='text'
            name='bucket-list-input'
            onChange={e => setText(e.target.value)}
            value={text}
            className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>
        <button
          type='submit'
          disabled={!text}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Add+
        </button>
      </form>
    </div>
  );
}

export default BucketListForm;
