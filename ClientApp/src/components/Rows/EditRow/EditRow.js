import React from 'react';

const EditRow = ({ person, handleEditChange, editData, changePerson, setEdit }) => {
    return (
        <tr key={person.id}>
            <td>
                <input
                    type="text"
                    name="name"
                    onChange={handleEditChange}
                    value={editData.name}></input>
            </td>
            <td>
                <input
                    type="text"
                    name="surname"
                    onChange={handleEditChange}
                    value={editData.surname}></input>
            </td>
            <td>
                <input
                    type="text"
                    name="profession"
                    onChange={handleEditChange}
                    value={editData.profession}></input>
            </td>
            <td>
                <input
                    type="text"
                    name="salary"
                    onChange={handleEditChange}
                    value={editData.salary}></input>
            </td>
            <td className="d-flex justify-content-center gap-5 ">
                <a
                    className="link pe-auto text-primary"
                    href="#"
                    onClick={() => changePerson(editData)}>
                    Сохранить
                </a>
                <a className="link pe-auto text-primary" href="#" onClick={() => setEdit(null)}>
                    Отмена
                </a>
            </td>
        </tr>
    );
};

export default EditRow;
