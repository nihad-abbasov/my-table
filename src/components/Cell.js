import React from 'react';
import { Td } from "@chakra-ui/react";
import Row from './Row';
import EditableRow from './EditableRow';


const Cell = ({value}) => {
    return (
        <>
          <Td textAlign="center">{value}</Td>
        </>
    )
}

export default Cell
