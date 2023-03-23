export const UserListTable = (removeStudentHandler) => {
  return [
    {
      id: 1,
      name: "Roll No",
      selector: (row) => row.rollNo,
      sortable: true,
      reorder: true,
    },
    {
        id: 2,
        name: "Name",
        selector: (row) => row.firstName +" "+ row.lastName,
        sortable: true,
        reorder: true,
    },
    {
        id: 3,
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
        reorder: true,
    },
    {
        id: 3,
        name: "Phonw No",
        selector: (row) => row.phoneNo,
        sortable: true,
        reorder: true,
    },
    {
        id: 7,
        name: "Date of Birth",
        selector: (row) => row.dob,
        sortable: true,
        reorder: true,
    },
    {
        id: 4,
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        reorder: true,
    },
    {
        id: 5,
        name: "Year",
        selector: (row) => row.year,
        sortable: true,
        reorder: true,
    },
    {
      id: 6,
      name: "Action",
      cell: (row) => {
        return <>
            <button className="btn btn-primary btn-md" onClick={() => removeUserHandler(row.id)}>Edit</button>
            <button className="btn btn-primary btn-md" onClick={() => removeStudentHandler(row.id)}>Delete</button>
          </>
      },
      sortable: true,
      reorder: true,
  }
  ];
};