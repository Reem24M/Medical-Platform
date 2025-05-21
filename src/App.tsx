import { Route, Routes } from 'react-router-dom';
import Home from './Features/Home/pages/home';
import Login from './Features/Auth/Pages/Login/login';
import Star from './assets/Star1.svg';

function App() {
  return (
    <div className="relative min-h-screen bg-[#e5f0f0] overflow-hidden">
      
      <img
        src={Star}
        alt="star background"
        className="absolute top-0 left-0 w-[500px] h-[500px] z-0"
      />

   
      <div className="relative z-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
