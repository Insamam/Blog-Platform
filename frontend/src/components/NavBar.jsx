
import React from 'react';
import blogIcon from '../assets/blog.svg';
import { BsSearch } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between m-2">
      <div className="flex px-12 py-4">
        <img src={blogIcon} alt="Blog Icon" className="w-7 h-7 hidden md:block" /> 
        <h2 className="text-lg px-3 md:text-xl font-extrabold">Blog Market</h2>
      </div>
      <div className="flex items-center justify-center space-x-4 px-8 "> 
        <p className="cursor-pointer"> <BsSearch /></p>
        <input className="px-2 py-1 w-auto md:w-30 rounded-full outline-none" placeholder="Search a post" type="text"/>
      </div> 
    </div>
  );
};

export default NavBar;