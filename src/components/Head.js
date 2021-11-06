import React from "react";
import { thead } from "../../db";

import {
    Thead,
    Tr,
    Th
  } from "@chakra-ui/react";


const Head = () => {
  return (
    <>
      <Thead bg="white">
        <Tr>
          {thead.map((element) => {
            return <Th key={element} color="black" fontSize="md" textAlign="center">{element}</Th>;
          })}
        </Tr>
      </Thead>
    </>
  );
};

export default Head;
