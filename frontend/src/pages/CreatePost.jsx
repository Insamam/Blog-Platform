import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { URL } from "../url"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  
  

  const handleCreate=async (e)=>{
    e.preventDefault()
    const post={
      title,
      desc
    }

    if(file){
      const data=new FormData()
      const filename=Date.now()+file.name
      data.append("img",filename)
      data.append("file",file)
      post.photo=filename
      //console.log(data)
      //img upload
      try{
        const imgUpload=await axios.post(URL + 'api/upload',data)
         //console.log(imgUpload.data)
      }
      catch(err){
        console.log(err)
      }
    }
    //post upload
   console.log(post)
    try{
      const res = await axios.post(URL + "api/posts/create", post, { withCredentials: true });

      navigate("/posts/post/"+res.data._id)
       console.log(res.data)

    }
    catch(err){
      console.log(err)
    }
}


  

  return (
    <div className='px-6 md:px-[200px] mt-8 min-h-screen'>
      <h1 className='font-bold md:text-2xl text-xl mb-4'>Create a post</h1>
      <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter post title'
          className='px-4 py-2 outline-none border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        />
        <div className="flex items-center space-x-4">
          <label htmlFor="fileInput" className="cursor-pointer bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">Upload Image</label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </div>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='px-4 py-2 outline-none border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder='Enter post description'
        />
        <Link to="/">
          <button
            onClick={handleCreate}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md text-lg transition duration-300'
          >
            Create
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CreatePost;
