import React from 'react'
import { Button } from "@chakra-ui/react";


const Actions = ({editEmpId, handleEditClick, handleSaveClick, employee, handleDelete, isEmpDeleted, handleRestore }) => {

    const renderEditButton = () => (
        <Button disabled={isEmpDeleted} colorScheme="blue" variant="ghost" onClick={(event) => handleEditClick(event, employee)}>
            Edit
        </Button>
    );

    const renderSaveButton = () => (
        <Button colorScheme="green" variant="solid" onClick={() => handleSaveClick()}>
            Save
        </Button>
    );

    const renderDeleteButton = () => (
        <Button colorScheme="red" variant="ghost" onClick={() => handleDelete()}>
            Delete
        </Button>
    );

    const renderRestoreButton = () => (
        <Button colorScheme="orange" variant="ghost" onClick={() => handleRestore(employee.id)}>
            Restore
        </Button>
    );
    
    const isEditing = editEmpId === employee.id;
    
    return (
        <>
            { isEditing ? renderSaveButton() : renderEditButton() }
            { isEmpDeleted ? renderRestoreButton() : renderDeleteButton()}
        </>
    )
}

export default Actions
