import React from 'react'
import { useDispatch } from 'react-redux'
//import { deleteAllUsers } from '../store/slices/UserSlices';
import { deleteAllStudent } from '../store/actions';

const DeleteAllStudent = () => {

  const dispatch = useDispatch();

  const deleteAllStudentHandler = () => {
    dispatch(deleteAllStudent([]))
  }

  return (
    <button className="btn delete-btn" onClick={() => deleteAllStudentHandler()}>Delete All Users</button>
  )
}

export default DeleteAllStudent;
