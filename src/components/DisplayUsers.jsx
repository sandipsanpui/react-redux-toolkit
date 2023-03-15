import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayUsers() {

    const userData = useSelector((state) => {
        return state.users
    })
    return (
        <>
            {userData && userData.map((user, index) => {
                return <li key={index} className="user-list">
                    <h3>{user}</h3>
                    <strong class="remove-user">X</strong>
                </li>
            })

            }
        </>
    )
}
