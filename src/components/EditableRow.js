import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import Actions from "./Actions";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  employee,
  handleEditClick,
  handleSaveClick,
  editEmpId,
  handleDelete,
  isEmpDeleted,
}) => {
  return (
    <Tr>
      <Td textAlign="center">{employee.id}</Td>
      <Td textAlign="center">
        <input
          style={{ color: "black", padding: "6px 3px", borderRadius: "4px" }}
          name="name"
          type="text"
          placeholder="Enter a name"
          required={true}
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </Td>
      <Td textAlign="center">
        <input
          style={{ color: "black", padding: "6px 1px", borderRadius: "4px" }}
          name="surname"
          type="text"
          placeholder="Enter a surname"
          required={true}
          value={editFormData.surname}
          onChange={handleEditFormChange}
        ></input>
      </Td>
      <Td textAlign="center">
        <input
          style={{ color: "black", padding: "6px 1px", borderRadius: "4px" }}
          name="date_of_birth"
          type="string"
          placeholder="Enter a date of birth"
          required={true}
          value={editFormData.date_of_birth}
          onChange={handleEditFormChange}
        ></input>
      </Td>
      <Td textAlign="center">
        <input
          style={{ color: "black", padding: "6px 1px", borderRadius: "4px" }}
          name="position"
          type="text"
          placeholder="Enter a position"
          required={true}
          value={editFormData.position}
          onChange={handleEditFormChange}
        ></input>
      </Td>
      <Td textAlign="center">
        <input
          style={{ color: "black", padding: "6px 1px", borderRadius: "4px" }}
          name="phone_number"
          type="number "
          placeholder="Enter a phone_number"
          value={editFormData.phone_number}
          onChange={handleEditFormChange}
        ></input>
      </Td>
      <Td textAlign="center">
        <Actions
          employee={employee}
          handleSaveClick={handleSaveClick}
          editEmpId={editEmpId}
          handleDelete={handleDelete}
          isEmpDeleted={isEmpDeleted}
          handleEditClick={handleEditClick}
        />
      </Td>
    </Tr>
  );
};

export default EditableRow;
