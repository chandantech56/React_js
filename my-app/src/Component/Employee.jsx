import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

const Employee = () => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/empData")
      .then((response) => {
        console.log("Response:", response.data);
        setEmpData(response.data);
      })
      .catch((err) => console.error("Error fetching employee data:", err));
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Employee Details</h1>
      {empData.length > 0 ? (
        <Table striped bordered hover className="my-5">
          <thead>
            <tr>
              <th>EmpId</th>
              <th>Emp_Name</th>
              <th>Designation</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((data, index) => (
              <tr key={index}>
                <td>{data.empId}</td>
                <td>{data.empName}</td>
                <td>{data.designation}</td>
                <td>{data.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center">No employee data available.</p>
      )}
    </Container>
  );
};

export default Employee;
