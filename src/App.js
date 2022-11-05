import React, { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'https://picsum.photos/v2/list?page=1&limit=10';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        
        setPostList(responseJSON);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
      
    }

    fetchPostList();
  },[]);

  return (
    <div className="App">
      <h1>Post list</h1>
      {/*<PostList posts={postList}></PostList>*/}
      <AlbumFeature></AlbumFeature>
    </div>
  );
}

export default App;
