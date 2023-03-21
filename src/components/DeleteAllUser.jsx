import React from 'react'
import { useDispatch } from 'react-redux'
//import { deleteAllUsers } from '../store/slices/UserSlices';
import { deleteAllUsers } from '../store/actions';

const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const deleteAllUserHandler = () => {
    dispatch(deleteAllUsers([]))
  }

  return (
    <button className="btn delete-btn" onClick={() => deleteAllUserHandler()}>Delete All Users</button>
  )
}

export default DeleteAllUser;
