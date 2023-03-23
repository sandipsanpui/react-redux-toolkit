import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewStudent from "./AddNewStudent";
import DeleteAllStudent from "./DeleteAllStudent";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {

  const dispatch = useDispatch();

  const userData = useSelector((state) => {
    return state.users
  })

  const addNewUserHandler = (data) => {
    window.$("#exampleModal").modal("show");
  }

  return (
    <div className="container">
      <AddNewStudent />
      <DisplayUsers />
      {userData && userData.data.length > 0 && <DeleteAllStudent />}
    </div>
  );
};

export default UserDetails;