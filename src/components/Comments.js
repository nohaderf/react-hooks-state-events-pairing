import React, { useState } from 'react';
// import video from "../data/video.js";

function Comments({key, user, comment}){

    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDislikesCount] = useState(0)

    function handleLikesClick(){
        setLikesCount((likesCount) => likesCount + 1)
      }
    
    function handleDislikesClick(){
        setDislikesCount((disLikesCount) => dislikesCount - 1)
    }
    
    function handleDeleteClick(e){
        console.log(e.target)
    }
    return (
        <div>
            <strong>{user}</strong>
            <p>{comment}</p>
            <button onClick={handleLikesClick}>{likesCount} 👍</button>
            <button onClick={handleDislikesClick}>{dislikesCount} 👎</button>
            <button id={key} onClick={handleDeleteClick}>Remove Comment</button>
        </div>
        
    )
    
}

export default Comments