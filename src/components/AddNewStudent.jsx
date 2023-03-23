import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewStudent } from '../store/actions';

export default function AddNewStudent() {

    const [isShowModal, setIsShowModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [married, setMarried] = useState(false);

    const dispatch = useDispatch();

    const addStudentModal = () => {
        setIsShowModal(true);
    }

    const closeStudentModal = () => {
        window.$("#addStudentModal").modal("hide");
        setIsShowModal(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNo("");
        setRollNo("");
        setDepartment("");
        setYear("");
        setDateOfBirth("");
        setMarried(false);
    }

    const handleChange = (event) => {
        if(event.target.name == "firstName") {
            setFirstName(event.target.value)
        } 
        if(event.target.name == "lastName") {
            setLastName(event.target.value)
        } 
        if(event.target.name == "email") {
            setEmail(event.target.value)
        } 
        if(event.target.name == "phoneNo") {
            setPhoneNo(event.target.value)
        } 
        if(event.target.name == "rollNo") {
            setRollNo(event.target.value)
        } 
        if(event.target.name == "department") {
            setDepartment(event.target.value)
        } 
        if(event.target.name == "year") {
            setYear(event.target.value)
        } 
        if(event.target.name == "dateOfBirth") {
            setDateOfBirth(event.target.value)
        } 
        if(event.target.name == "married") {
            setMarried(event.target.checked)
        } 
    }

    const handleCheck = (event) => {
        setMarried(event.target.checked)
    }

    const submitData = () => {
        let postData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo,
            dateOfBirth: "821723511000",
            rollNo: rollNo,
            department: department,
            year: year,
            married: married
        }
        dispatch(addNewStudent(postData));
        closeStudentModal();
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
                <div class="modal fade" id="addStudentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="exampleModalLongTitle">Add Student</h3>
                                <button type="button" class="close" onClick={() => closeStudentModal()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" name="firstName" value={firstName} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Phone No</label>
                                        <input type="email" className="form-control" name="phoneNo" value={phoneNo} onChange={handleChange} maxLength="10" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Date of Birth</label>
                                        <input type="text" className="form-control" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Roll No</label>
                                        <input type="email" className="form-control" name="rollNo" value={rollNo} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Department</label>
                                        <input type="text" className="form-control" name="department" value={department} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Year</label>
                                        <input type="text" className="form-control" name="year" value={year} onChange={handleChange} minLength={"4"} maxLength={"4"} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className={`col-md-3`}>
                                        <label class="switch">
                                            Married
                                            <input
                                                type="checkbox"
                                                name="married"
                                                onClick={(e) => {handleCheck(e);}}
                                                checked={married}
                                            />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Close</button>
                                <button type="butUncaughtton" class="btn btn-primary btn-lg" onClick={() => submitData()}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
