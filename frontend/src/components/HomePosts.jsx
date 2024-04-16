import React from 'react';
import AI from '../assets/ai.jpg';
import { IF } from '../url'
const HomePosts = ({post}) => {

  const imageUrl = `http://localhost:5000/images/${post.photo}`;

  return (
    
    <div className='w-full flex flex-col md:flex-row mt-8 shadow-2xl bg-white'>

      {/* IMAGE */}
      <div className='w-full md:w-[35%] flex justify-center items-center rounded-lg overflow-hidden shadow-md shadow-gray-800'>
        <img src={imageUrl} alt="Image" className="w-full object-cover rounded-lg" />
      </div>

      {/* CONTENT */}
      <div className='flex flex-col w-full md:w-[65%] md:ml-4 rounded-lg overflow-hidden mt-4 md:mt-0'>
        <h1 className="text-xl md:text-2xl px-3 font-bold mt-1">{post.title}</h1>
        <p className="text-sm md:text-lg px-3 mt-2">
        {post.desc.slice(0,500)+" ...Read more"}
        </p>
      </div>

    </div>
  )
}

export default HomePosts;