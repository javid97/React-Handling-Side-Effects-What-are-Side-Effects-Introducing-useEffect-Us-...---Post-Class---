import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import PostList from './PostList';
import fetchPosts from '../api/fetchPosts';
import PaginationButtonsList from './PaginationButtonsList';
const App = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    const handlePage = (pageNumber) => {
      setPage(pageNumber);
    }

  useEffect(() => {
    const getData = async (page) => {
      const data = await fetchPosts(page);
      setPosts(data);
    }
    getData(page);
  }, [page])
  
  return (
    <div id="main">
      <PostList posts= {posts}/>
      <PaginationButtonsList page={page} handlePage={handlePage}/>
    </div>
  )
}


export default App;
