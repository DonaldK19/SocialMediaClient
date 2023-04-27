import React from "react";
import ProfileImage from "../../img/profileImg.jpg";
import { useDispatch,useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/userAction";
import { useState } from "react";
function User({person}) {
  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following,setFollowing] = useState(person.followers.includes(user._id))
  const dispatch = useDispatch();
  const handleFollow = () =>{
    following ? 
    dispatch(unfollowUser(person._id,user)):
    dispatch(followUser(person._id,user))
    setFollowing((prev)=>!prev)
  }
  return (
    <div className="followers">
      <div>
        <img src={person.coverPicture?serverPublicFolder + person.profilePicture : ProfileImage} alt="" className="followerImage" />
        <div className="name">
          <span>{person.firstname}</span>
          <span style={{wordBreak: "break-all"}}>{person.username}</span>
        </div>
      </div>
      <button className={following?"button fc-button UnfollowButton":"button fc-button"} onClick={handleFollow} >{following?"Unfollow":"Follow"}</button>
    </div>
  );
}

export default User;
