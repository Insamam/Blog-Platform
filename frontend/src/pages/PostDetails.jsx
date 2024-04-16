import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import axios from "axios"
import { useNavigate, useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { URL } from "../url"

const PostDetails = () => {
  
  const { id } = useParams(); // Get postId from URL
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}api/posts/${id}`);
      setPost(res.data);
      setImageUrl(`${URL}images/${res.data.photo}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePost = async () => {
    try {
      await axios.delete(`${URL}api/posts/${id}`, { withCredentials: true });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost(); // Fetch post details when component mounts or postId changes
  }, [id]);

  return (
    <div className="px-8 md:px-[200px] mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
        <div className="flex items-center justify-center space-x-2">
        <p className="cursor-pointer" onClick={() => navigate(`/edit/${id}`)}><BiEdit /></p>

          <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete /></p>
        </div>
      </div>
      <img src={imageUrl} alt="Image" className="w-full mx-auto mt-8 md:max-h-[500px]" />
      <p className="mx-auto mt-8">{post.desc}</p>
    </div>
  );
};

export default PostDetails;
