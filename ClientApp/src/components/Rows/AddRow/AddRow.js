import React from 'react';

const AddRow = ({ newPerson, handleAddPersonInputsChange, addPerson }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="name"
                    value={newPerson.name}
                    onChange={handleAddPersonInputsChange}></input>
            </td>
            <td>
                <input
                    type="text"
                    name="surname"
                    value={newPerson.surname}
                    onChange={handleAddPersonInputsChange}></input>
            </td>
            <td>
                <input
                    type="text"
                    name="profession"
                    value={newPerson.profession}
                    onChange={handleAddPersonInputsChange}></input>
            </td>
            <td>
                <input
                    type="text"
                    name="salary"
                    value={newPerson.salary}
                    onChange={handleAddPersonInputsChange}></input>
            </td>
            <td className="d-flex justify-content-center">
                <button onClick={() => addPerson()}>Добавить пользователя</button>
            </td>
        </tr>
    );
};

export default AddRow;
