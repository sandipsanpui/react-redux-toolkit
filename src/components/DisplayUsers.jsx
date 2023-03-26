import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from "react-data-table-component";
import { UserListTable } from './UserListTable';
import { getStudentList, deleteStudentById } from '../store/actions';
import axios from 'axios';
import AddStudentModal from './AddStudentModal';

export default function DisplayUsers() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [studentData, setStudentData] = useState({});

    const dispatch = useDispatch();
    const userData = useSelector((state) => {
        return state.users
    })

    const removeStudentHandler = (id) => {
        dispatch(deleteStudentById(id));
    }

    const editUserHandler = (id) => {
        axios({
            method: 'get',
            url: `${import.meta.env.VITE_REACT_APP_backendURL}/student/getById?id=${id}`,
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        }).then(response => {
            if(response && response.data && response.data.message === "Success!") {
                setStudentData(response.data.body);
                setIsShowModal(true);
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const closeStudentModal = () => {
        window.$("#addStudentModal").modal("hide");
        setIsShowModal(false);
    }

    useEffect(() => {
        dispatch(getStudentList())
        if(isShowModal) {
            window.$("#addStudentModal").modal("show");
        }
    }, [isShowModal])

    return (
        <>
            <DataTable
                title={"User Data"}
                columns={UserListTable(removeStudentHandler, editUserHandler)}
                data={userData.data}
                pointerOnHover
                fixedHeader
                fixedHeaderScrollHeight={"calc(100vh - 226px)"}
                pagination
                highlightOnHover
                progressPending={false}
                paginationServer
            />
            {isShowModal && <AddStudentModal formType={"EDIT"} closeStudentModal={closeStudentModal} studentData={studentData} />}
        </>
    )
}
