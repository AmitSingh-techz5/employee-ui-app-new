import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmpFun }) => {
  const navigate = useNavigate();
  const editEmployee = (e, empid) => {
    e.preventDefault();
    navigate(`/editEmployee/${empid}`);
  };

  return (
    <tr key={employee.empid}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.fname}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lname}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.empid}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.mailid}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.department}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.salary}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.location}</div>
      </td>
      <td className="text-center px-4 py-4 whitespace-nowrap text-sm">
        <button
          onClick={(e) => editEmployee(e, employee.empid)}
          className="text-indigo-600 font-bold hover:text-indigo-800 px-4 hover:cursor-pointer">
          Update
        </button>
        <button
          onClick={(e) => deleteEmpFun(e, employee.empid)}
          className="text-red-600 font-bold hover:text-red-800 hover:cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
