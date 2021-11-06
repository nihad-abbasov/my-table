import React from "react";
import {
    TableCaption
  } from "@chakra-ui/react";

const Caption = () => {
  return (
    <>
      <TableCaption placement="top">
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Employees Table
        </h1>
      </TableCaption>
    </>
  );
};

export default Caption;
