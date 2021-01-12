import React, { useState } from 'react';
// import video from "../data/video.js";

function Comments({user, comment}){

    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDislikesCount] = useState(0)

    function handleLikesClick(){
        setLikesCount((likesCount) => likesCount + 1)
      }
    
      function handleDislikesClick(){
        setDislikesCount((disLikesCount) => dislikesCount - 1)
      }
    
    return (
        <div>
            <strong>{user}</strong>
            <p>{comment}</p>
            <button onClick={handleLikesClick}>{likesCount} 👍</button><button onClick={handleDislikesClick}>{dislikesCount} 👎</button>
        </div>
        
    )
    
}

export default Comments