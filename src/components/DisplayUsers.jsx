import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from "react-data-table-component";
import { UserListTable } from './UserListTable';
import { getStudentList, deleteStudentById } from '../store/actions';

export default function DisplayUsers() {

    const dispatch = useDispatch();
    const userData = useSelector((state) => {
        return state.users
    })

    const removeStudentHandler = (id) => {
        dispatch(deleteStudentById(id));
    }

    useEffect(() => {
        dispatch(getStudentList())
    }, [])

    return (
        <DataTable
            title={"User Data"}
            columns={UserListTable(removeStudentHandler)}
            data={userData.data}
            pointerOnHover
            fixedHeader
            fixedHeaderScrollHeight={"calc(100vh - 226px)"}
            pagination
            highlightOnHover
            progressPending={false}
            paginationServer
        />
    )
}
