import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Router>
        <div className='w-full my-0 mx-auto px-5 text-center'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
