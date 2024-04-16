import React, { useState, useEffect } from 'react';
import axios from "axios";
import { URL } from "../url";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const postId = useParams().id;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}api/posts/${postId}`);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setFile(res.data.photo);
      setImageUrl(`${URL}images/${res.data.photo}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      try {
        await axios.post(`${URL}api/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.put(`${URL}api/posts/${postId}`, post, { withCredentials: true });
      navigate(`/posts/post/${res.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className='px-6 md:px-[200px] mt-8 min-h-screen'>
      <h1 className='font-bold md:text-2xl text-xl mb-4 text-gray-800'>Edit Post</h1>
      <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter updated title' className='px-4 py-2 outline-none border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-800'/>
        <div className="flex items-center space-x-4">
          <label htmlFor="fileInput" className="cursor-pointer bg-blue-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">Upload Image</label>
          <input onChange={(e) => { setFile(e.target.files[0]); setImageUrl(URL.createObjectURL(e.target.files[0])); }} type="file" id="fileInput" className="hidden" />
        </div>
        <img src={imageUrl} alt="Post Image" className="w-full mx-auto mt-4 md:max-h-[300px]" />
        <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className='px-4 py-2 outline-none border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-800' placeholder='Enter updated description'/>
        <button onClick={handleUpdate} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md text-lg transition duration-300'>Update</button>
      </form>
    </div>
  );
};

export default EditPost;
