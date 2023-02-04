import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const verified = false;

const App = () => {
  const { path } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!verified)
    {
      console.log(navigate);
      //navigate('/login')
    }
  }, [path]);
  
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/dashboard' element={<Home/>}/>
      {/* <Route path='/character/:char' exact component={Character}/>
      <Route component={NotFound}/> */}
    </Routes>
  );
}

export default App;
