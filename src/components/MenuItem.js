import React, { useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function MenuItem({ image, name, price }) {
  const [liked, setLiked] = useState(false);
  const [likeCount,setLikeCount]=useState(0);
  


  const handleLike = () => {
    setLiked(!liked);
    // setLikeCount(liked ? likeCount -1 : likeCount +1)
    setLikeCount(likeCount + 1);

  };

  return (
    <div className="menuItem">
      <div  style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button className="likeButton" onClick={handleLike}>
        {liked ? <FaHeart style={{color: 'red'}}/> : <FaRegHeart />}
      </button>
      <p className="likeCount">{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
}

export default MenuItem;
