import React, { useState } from 'react';
import './App.scss';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

function App() {
  const [posts, setPosts] = useState(dummyData);

  return (
    <div className="App">
      <SearchBar />
      <PostContainer posts={posts} />
    </div>
  );
}

export default App;