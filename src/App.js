import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';

function App() {

  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    console.log(posts);
    setPosts(posts);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <List posts={posts} />
    </div>
  );
}

export default App;
