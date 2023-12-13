import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../features/goals/goalSlice';

function BucketListItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between'>
      <p>{goal.text}</p>
      <button className='' onClick={() => dispatch(deleteGoal(goal._id))}>
        delete
      </button>
    </div>
  );
}

export default BucketListItem;
