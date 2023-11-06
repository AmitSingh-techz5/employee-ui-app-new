/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService, { getAllEmployees, deleteEmployee } from "../services/EmployeeService";
import Employee from "./Employee";
import Navbar from "./Navbar";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    window.scrollTo(50, 120);
       fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
    //calling the get map (getEmployees() method) from EmployeeService file
      console.log("calling the get map (getEmployees() method) from EmployeeService file");
      const response = await getAllEmployees();
      setEmployees(response.data.getAllEmployees);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };


  const deleteEmpFun = async (e, id) => {
      e.preventDefault();
    //calling the delete map (deleteEmployees() method) from EmployeeService file
      console.log("calling the delete map (deleteEmployees() method) from EmployeeService file");
      await deleteEmployee(id).then((res) => {
          if(employees) {
              setEmployees((prevElement) => {
                  return prevElement.filter((employee) => employee.id !== id);
              });
              alert("Employee with " + id + " id deleted successfully");
          }
      });
    fetchData();
  }

  return (
    <>
    <Navbar/>

    {/* flex justify-center */}
    <div className="container my-8 App-Item">
      <div className="container mt-10 h-full">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-yellow-400 text-white px-6 py-2 font-semibold ">
          Register New Employee
        </button>
      </div>

      {/* <div className="flex shadow border-b"> */}
      {/* <div className="overflow-x-auto"> */}
        <table className="min-w-full table-auto mt-8">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-3">
                Last Name
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-3">
                Emp ID
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-2 px-4">
                Email ID
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-2 px-2">
                Department
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-2 px-4">
                Salary
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-6">
                Location
              </th>
              <th className="text-center font-bold text-black-500 tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
              <tbody>
                  {employees.map((employee) => (
                      <Employee 
                      employee={employee}
                      deleteEmpFun={deleteEmpFun} 
                      key={employee.empid}></Employee>
                  ))}
              </tbody>
          )}
        </table>
      {/* </div> */}
      {/* </div> */}
    </div>
    </>
  );
};

export default EmployeeList;
