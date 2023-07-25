import React from "react";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/GithubSlice";
const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../src/sample/users.json");
      const data = await response.json();
      dispatch(getUsers(data));
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  const githubUsers = useSelector((state) => state.github.users);
  return (
    <>
      {githubUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
};

export default UserList;
