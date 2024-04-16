import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col justify-center items-center'>
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 text-center animated-text py-5 break-words">
        Create a unique and beautiful blog
      </h1>
      <Link to="/createpost"><button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition duration-300">
        Create Your Blog
      </button></Link>
      <p className="text-white mt-4 text-lg">Or</p>
      <p className="text-white underline mt-2 hover:text-gray-300">
        View Recent Blogs Below
      </p> 
    </div>
  );
};

export default Header;


