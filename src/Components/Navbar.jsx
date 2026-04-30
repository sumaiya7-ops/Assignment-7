import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart2 } from 'lucide-react';
import logo from '../../B13-A7-keen-keeper/assets/logo.png';
const Navbar = () => {
     const activeClass = "flex items-center gap-2 px-4 py-2 rounded-full bg-[#064E3B] text-white font-medium";
  const inactiveClass = "flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 font-medium";

    return (
        <div className="flex items-center justify-between px-10 py-4 bg-white border-b sticky top-0 z-50">  
      <div className="flex items-center">
        <img src={logo} alt="KeenKeeper Logo" className="h-10 w-auto" />
      </div>
      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
        <Home size={18}/>
         Home
         </NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
        <Clock size={18}/>
         Timeline
         </NavLink>
        <NavLink to="/stats" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
        <BarChart2 size={18}/> 
        Stats
        </NavLink>
      </div>
    </div>
    );
};

export default Navbar;