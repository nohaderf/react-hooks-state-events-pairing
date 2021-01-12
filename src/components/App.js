import React, { useState } from 'react';
import video from "../data/video.js";
import Comments from './Comments';


function App() {
  // console.log("Here's your data:", video);

  const [likesCount, setLikesCount] = useState(video.upvotes)
  const [dislikesCount, setDislikesCount] = useState(video.downvotes)

  const videoComments = video.comments.map((comment) => {
    return (
    <Comments key={comment.id} user={comment.user} comment={comment.comment} />
    )
  })

  function handleLikesClick(){
    setLikesCount((likesCount) => likesCount + 1)
  }

  function handleDislikesClick(){
    setDislikesCount((disLikesCount) => dislikesCount - 1)
  }



  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleLikesClick}>{likesCount} 👍</button><button onClick={handleDislikesClick}>{dislikesCount} 👎</button>
      <hr></hr>
      <input
        // onChange={(e) => setProjectSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <h2>Comments</h2>
      {videoComments}
    </div>
  );
}

export default App;
