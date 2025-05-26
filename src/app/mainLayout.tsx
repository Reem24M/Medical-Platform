// MainLayout.tsx
import Star from '../assets/Star1.svg';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="relative min-h-screen MainBgColor overflow-hidden">
      <img
        src={Star}
        alt="star background"
        className="absolute top-0 left-0 w-[500px] h-[500px] z-0"
      />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
