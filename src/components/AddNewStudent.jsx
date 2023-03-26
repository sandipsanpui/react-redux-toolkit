import React, { useEffect, useState } from 'react'
import AddStudentModal from './AddStudentModal';

export default function AddNewStudent() {

    const [isShowModal, setIsShowModal] = useState(false);

    const addStudentModal = () => {
        setIsShowModal(true);
    }

    const closeStudentModal = () => {
        window.$("#addStudentModal").modal("hide");
        setIsShowModal(false);
    }

    useEffect(() => {
        if (isShowModal) {
            window.$("#addStudentModal").modal("show");
        }
    }, [isShowModal])

    return (
        <>
            <button type="button" class="btn btn-primary btn-lg float-right" onClick={() => addStudentModal()}>
                Add New Student
            </button>

            {isShowModal &&
                <AddStudentModal formType={"ADD"} closeStudentModal={closeStudentModal}/>
            }
        </>
    )
}
