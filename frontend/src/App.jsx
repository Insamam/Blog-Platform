import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
        <Route exact path="/createpost" element={<CreatePost />} />
        <Route exact path="/edit/:id" element={<EditPost />} />


      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
