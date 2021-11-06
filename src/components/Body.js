import React from "react";
import { Tbody } from "@chakra-ui/react";
import Row from "./Row";
import EditableRow from "./EditableRow";

const Body = ( { employeeList, editEmpId, handleEditClick, isEmpDeleted, handleRestore, handleDelete, handleSaveClick, handleEditFormChange, editFormData } ) => {

  return (
    <>
      <Tbody>
        {employeeList.map((emp) =>
          editEmpId === emp.id ? (
            <EditableRow
              key={emp.id}
              employee={emp}
              editEmpId={editEmpId}
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleSaveClick={() => handleSaveClick(emp)}
              handleDelete={() => handleDelete(emp.id)}
              isEmpDeleted={isEmpDeleted(emp.id)}
              handleEditClick={handleEditClick}
            />
          ) : (
            <Row
              key={emp.id}
              employee={emp}
              editEmpId={editEmpId}
              handleEditClick={handleEditClick}
              handleDelete={() => handleDelete(emp.id)}
              isEmpDeleted={isEmpDeleted(emp.id)}
              handleRestore={handleRestore}
            />
          )
        )}
      </Tbody>
    </>
  );
};

export default Body;
