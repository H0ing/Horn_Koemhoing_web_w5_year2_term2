import React, { useState } from 'react'

const App = () => {

  const [posts, setPosts] = useState([
    {id:1, text:"Hello", isEdited: false},
    {id:2, text:"Hello", isEdited: false},
    {id:3, text:"Hello", isEdited: false}
  ]);

  const markAsEdited = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id
          ? { ...post, isEdited: !post.isEdited }
          : post
      )
    );
  };

  return (
    <div>
      {posts.map(({id, text, isEdited}) =>
        <h1 key={id}>
          id:{id} text:{text} isEdited:{isEdited.toString()}
        </h1>
      )}

      <button onClick={() => markAsEdited(3)}>
        Toggle Post 3
      </button>
    </div>
  )
}

export default App