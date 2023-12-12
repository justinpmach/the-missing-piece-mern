import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className='flex justify-between items-center py-5 border-b border-black mb-10'>
      <div className=''>
        <Link to='/'>The Missing Piece</Link>
      </div>
      <ul className='flex justify-between items-center space-x-4'>
        {user ? (
          <li>
            <button className='' onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
