import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";
import User from "../User/User";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";
function FollowersCard() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const fetchPerson = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPerson();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People You May Know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
}

export default FollowersCard;
