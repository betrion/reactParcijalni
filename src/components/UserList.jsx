import React from "react";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/GithubSlice";
const UserList = () => {
  const dispatch = useDispatch();
  const userSearch = useSelector((state) => state.github.user);
  console.log(userSearch);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${userSearch}`,
      );
      const data = await response.json();
      console.log(data);
      dispatch(getUsers(data.items));
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, [dispatch, userSearch]);

  const githubUsers = useSelector((state) => state.github.users);
  return (
    <>
      {userSearch.length > 0 &&
        githubUsers.map((user) => <UserCard key={user.id} user={user} />)}
    </>
  );
};

export default UserList;
