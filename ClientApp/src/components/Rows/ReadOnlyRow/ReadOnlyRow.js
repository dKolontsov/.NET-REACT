import React from 'react';

const ReadOnlyRow = ({ person, deletePerson, selectPersonForChange }) => {
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.profession}</td>
            <td>{person.salary}</td>
            <td className="d-flex justify-content-center gap-5 ">
                <a
                    className="link pe-auto text-primary"
                    href="#"
                    onClick={(e) => selectPersonForChange(e, person)}>
                    Изменить
                </a>
                <a
                    className="link pe-auto text-primary"
                    href="#"
                    onClick={() => deletePerson(person.id)}>
                    Удалить
                </a>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
