import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BucketListForm from '../components/BucketListForm';
import { getGoals, reset } from '../../features/goals/goalSlice';
import BucketListItem from '../components/BucketListItem';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    state => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    } else {
      dispatch(getGoals());

      return () => {
        dispatch(reset());
      };
    }
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id='dashboard' className='min-h-screen border border-red-500 px-8'>
      <div className='flex justify-between mb-5 border border-green-500 px-8 py-4'>
        <h1>Welcome {user && user.firstName}</h1>
        <p>Bucket List Dashboard</p>
      </div>
      <div className='w-full h-full grid grid-cols-4'>
        <div className='bg-white rounded-lg max-h-64 shadow-md'></div>
        <div className='col-end-4 col-span-2 flex justify-center'>
          <BucketListForm />
        </div>

        {goals.length > 0 ? (
          <div className='col-end-5 w-full h-[70vh] rounded-lg shadow-md max-w-4xl p-8 bg-gradient-to-l from-slate-300/10 via-blue-400/10 to-pink-200/10'>
            {goals.map(goal => (
              <BucketListItem key={`goal-${goal._id}`} goal={goal} />
            ))}
          </div>
        ) : (
          <div>No items on your bucket list!</div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
