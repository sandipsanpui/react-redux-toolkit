import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewStudent from "./AddNewStudent";
import DeleteAllUser from "./DeleteAllUser";
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
      {userData && userData.data.length > 0 && <DeleteAllUser />}
    </div>
  );
};

export default UserDetails;