import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/UserSlices';

export default function DisplayUsers() {

    const dispatch = useDispatch();
    const userData = useSelector((state) => {
        return state.users
    })

    const removeUserHandler = (index) => {
        dispatch(removeUser(index));
    }

    return (
        <>
            {userData && userData.map((user, index) => {
                return <li key={index} className="user-list">
                    <h3>{user}</h3>
                    <div onClick={() => removeUserHandler(index)}><strong className="remove-user">X</strong></div>
                </li>
            })

            }
        </>
    )
}
