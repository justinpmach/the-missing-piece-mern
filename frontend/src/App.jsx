import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

const App = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
