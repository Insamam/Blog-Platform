import React, { useState } from 'react';
import blogIcon from '../assets/blog.svg';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');

  return (
    <div className="flex items-center justify-between m-2 bg-slate-50">
      <div className="flex px-4 md:px-12 py-4">
        <img src={blogIcon} alt="Blog Icon" className="w-7 h-7 hidden md:block" />
        <Link to="/"><h2 className="text-lg px-3 md:text-xl font-extrabold text-gray-800 hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, #FFA500, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Blog Market</h2> </Link>
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4 px-4 md:px-8"> 
        <p onClick={() => navigate(prompt ? `?search=${prompt}` : '/')} className="cursor-pointer"><BsSearch/></p>
        <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/>
        <Link to="/createpost"><button className="px-2 py-1 font-semibold md:font-extrabold border bg-cyan-400 text-white rounded-md text-sm">Create</button></Link>
      </div> 
    </div>
  );
};

export default NavBar;
