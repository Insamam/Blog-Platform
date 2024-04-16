import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming you're using React Router
import HomePosts from '../components/HomePosts';
import Header from '../components/Header';
import axios from 'axios';
import { URL } from '../url'

const Home = () => {

  const {search} = useLocation();
  const [posts, setPosts] = useState([]);

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    // Check if there's a search query in the URL
    if (search && search !== '') {
      setShowHeader(false); // Hide the header if there's a search query
    } else {
      setShowHeader(true); // Show the header if there's no search query
    }
  }, [search]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL + 'api/posts'+search);

      setPosts(response.data); // Assuming response.data is an array of posts
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      {showHeader && <Header />}
      <div className="px-4 md:px-12 min-h-screen">
        {posts.map(post => (
          <Link key={post._id} to={`/posts/post/${post._id}`}>
            <HomePosts post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
