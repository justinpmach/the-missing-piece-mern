import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BucketListForm from '../components/BucketListForm';
import { getGoals, reset } from '../../features/goals/goalSlice';

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
    }
    console.log('here: sadasdas');

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id='dashboard' className=''>
        <h1>Welcome {user && user.firstName}</h1>
        <p>Bucket List Dashboard</p>
      </section>

      <BucketListForm />

      {goals.length > 0 ? (
        <div className='flex flex-col'>
          {goals.map((goal, index) => (
            <p key={`goal_${goal.id}-${index}`}>{goal.text}</p>
          ))}
        </div>
      ) : (
        <div>No items on your bucket list!</div>
      )}
    </>
  );
}

export default Dashboard;
