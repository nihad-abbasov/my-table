import React, { useState } from "react";
import { employees } from "../../db";
import Caption from "./Caption";
import Head from "./Head";
import Body from "./Body";
import isEqual from "lodash.isequal";
import { Table, Button } from "@chakra-ui/react";

const initialValue = {
  name: "",
  surname: "",
  date_of_birth: "",
  position: "",
  phone_number: "",
};

const TableMain = () => {
  // States
  const [modifiedemployeeList, setModifiedemployeeList] = useState([]);
  const [employeeList, setEmployeeList] = useState(employees);
  const [editFormData, setEditFormData] = useState(initialValue);
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const [editEmpID, setEditEmpId] = useState(null)

  // Handlers
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, emp) => {
    event.preventDefault();
    setEditEmpId(emp.id);

    const formValues = {
      name: emp.name,
      surname: emp.surname,
      date_of_birth: emp.date_of_birth,
      position: emp.position,
      phone_number: emp.phone_number,
    };

    setEditFormData(formValues);
  };

  const isEmpNotChanged = (employee) => {
    const originalEmpObj = employees.find((item) => item.id === employee.id);
    return isEqual(employee, originalEmpObj);
  };

  const isAlreadyModifiedEmp = (employeeId) => {
    return modifiedemployeeList.some((item) => item.id === employeeId);
  };

  const discardEmpFromModifiedEmps = (employeeId) => {
    if (isAlreadyModifiedEmp(employeeId)) {
      const uptadedEmps = modifiedemployeeList.filter(
        (item) => item.id !== employeeId
      );
      setModifiedemployeeList(uptadedEmps);
    }
  };

  const addEmpToModifiedEmps = (employee) => {
    if (!isAlreadyModifiedEmp(employee.id)) {
      setModifiedemployeeList([...modifiedemployeeList, employee]);
    }
  };

  const updateEmpInModifiedEmps = (employee) => {
    const updatedEmps = modifiedemployeeList.map((item) =>
      item.id === employee.id ? { id: employee.id, ...editFormData } : item
    );
    setModifiedemployeeList(updatedEmps);
  };

  const handleSaveClick = (employee) => {
    if (isEmpNotChanged({id: employee.id, ...editFormData})) {
      discardEmpFromModifiedEmps(employee.id);
    } else {
      if (isAlreadyModifiedEmp(employee.id)) {
        updateEmpInModifiedEmps(employee);
      } else {
        addEmpToModifiedEmps({id: employee.id, ...editFormData});
      }
    }

    const updatedemployeeList = employeeList.map((item) =>
      item.id === employee.id ? { id: employee.id, ...editFormData } : item
    );
    setEmployeeList(updatedemployeeList);
    setEditEmpId(null);
    setEditFormData(initialValue);
  };

  const handleDelete = (employeeId) => {
    const deletedEmployee = employeeList.find((item) => item.id === employeeId);
    setDeletedEmployees([...deletedEmployees, deletedEmployee]);
    setEditEmpId(null);
    setEditFormData(initialValue);
  };

  const handleRestore = (employeeId) => {
    setDeletedEmployees(
      deletedEmployees.filter((item) => item.id !== employeeId)
    );
  };

  const isEmpDeleted = (employeeId) => {
    return !!deletedEmployees.find((item) => item.id === employeeId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted values is logged on the console')
    console.log('modfiedEmployees', modifiedemployeeList);
    console.log('deletedEmployees', deletedEmployees);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setModifiedemployeeList([]);
    setEmployeeList(employees);
    setEditFormData(initialValue);
    setDeletedEmployees([]);
    setEditEmpId(null)
  };

  return (
    <form>
      <Table variant="simple" colorScheme="teal" size="sm">
        <Caption />
        <Head />
        <Body
          employeeList={employeeList}
          isEmpDeleted={isEmpDeleted}
          handleRestore={handleRestore}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
          handleEditFormChange={handleEditFormChange}
          editFormData={editFormData}
          handleSaveClick={handleSaveClick}
          editEmpId={editEmpID}
        />

            {/* <Tfoot>
            <Tr>
              <Th><h1>Pagination Things</h1></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot> */}
      </Table>
       <div style={{ margin: 20 }}>
          <Button marginRight={10} colorScheme="blue" size="md" onClick={handleSubmit}>
            Submit
          </Button>
          <Button colorScheme="red" size="md" onClick={handleReset}>
            Reset to Initial Values
          </Button>
      </div>
    </form>
  );
};

export default TableMain;
