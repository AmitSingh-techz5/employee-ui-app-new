import axios from 'axios';

const SPRING_BASE_URL = 'http://localhost:8080/empmgn/';

export function createEmployee(employee) {
  return axios.post(SPRING_BASE_URL+'createEmployee', employee);
}

export function getAllEmployees() {
  return axios.get(SPRING_BASE_URL+ 'getAllEmployees');
}

export function deleteEmployee(empid) {
  return axios.delete(SPRING_BASE_URL+"deleteEmployee/"+empid);
}

export function getEmployeeById(empid) {
  return axios.get(SPRING_BASE_URL+"getEmployee/"+empid);
}

export function editEmployee(employee) {
  return axios.put(SPRING_BASE_URL+ 'updateEmployee', employee);
}





// import axios from 'axios';

// const SPRING_BASE_URL = 'http://localhost:8080/empmgn/employees';

// export default function EmployeeService() {

//   const saveEmployee = (employee) => {
//     return axios.post(SPRING_BASE_URL, employee);
//   };

//   const getEmployees = () => {
//     return axios.get(SPRING_BASE_URL);
//   };

//   const deleteEmployee = (id) => {
//     return axios.delete(SPRING_BASE_URL + "/" + id);
//   };

//   const getEmployeeById = (id) => {
//     return axios.get(SPRING_BASE_URL + "/" + id);
//   };

//   const updateEmployee = (employee, id) => {
//     return axios.put(SPRING_BASE_URL + "/" + id, employee);
//   };

// return(
//   saveEmployee,
//   getEmployees,
//   deleteEmployee,
//   getEmployeeById,
//   updateEmployee
// )

// }