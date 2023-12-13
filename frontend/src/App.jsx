import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <div className='font-lekton w-full min-h-screen bg-gradient-to-b from-slate-300/30 to-blue-400/20'>
          <Header />
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<SignUp />} />
          </Routes>
          <div className='absolute inset-[10vh_35vw_40vh_10vw] rounded-xl bg-white opacity-50 bg-blue-300/60 z-10'></div>
        </div>
      </Router>
    </>
  );
};

export default App;
