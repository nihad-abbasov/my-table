import React from "react";
import { employees } from "../../db";
import Cell from "./Cell";

import { Tr, Td } from "@chakra-ui/react";
import Actions from "./Actions";

const Row = ({ employee, handleEditClick, editEmpId, handleDelete, isEmpDeleted, handleRestore }) => {
  return (
    <>
      <Tr backgroundColor={isEmpDeleted && '#C53030'}>
        {Object.keys(employee).map((key) => {
          return <Cell key={key} value={employee[key]} />;
        })}
        <Td>
          <Actions
            handleEditClick={handleEditClick}
            employee={employee}
            editEmpId={editEmpId}
            handleDelete={handleDelete}
            isEmpDeleted={isEmpDeleted}
            handleRestore={handleRestore}
          />
        </Td>
      </Tr>
    </>
  );
};

export default Row;
