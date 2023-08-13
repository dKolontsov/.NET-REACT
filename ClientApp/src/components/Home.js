import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReadOnlyRow from './Rows/ReadOnlyRow/ReadOnlyRow';
import EditRow from './Rows/EditRow/EditRow';
import AddRow from './Rows/AddRow/AddRow';

export const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPerson, setNewPerson] = useState({
        name: '',
        surname: '',
        profession: '',
        salary: '',
    });
    const [edit, setEdit] = useState(null);
    const [editData, setEditData] = useState({
        name: '',
        surname: '',
        profession: '',
        salary: '',
    });

    async function loadData() {
        await axios
            .get('people')
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        setLoading(false);
    }

    function handleAddPersonInputsChange(event) {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newData = { ...newPerson };
        newData[fieldName] = fieldValue;
        setNewPerson(newData);
    }

    function addPerson() {
        axios
            .post('people', newPerson)
            .then(() => {
                setData([]);
                setNewPerson({
                    name: '',
                    surname: '',
                    profession: '',
                    salary: '',
                });
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }

    function handleEditChange(event) {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newData = { ...editData };
        newData[fieldName] = fieldValue;
        setEditData(newData);
    }

    function selectPersonForChange(event, person) {
        event.preventDefault();
        setEdit(person.id);

        const inputValues = {
            id: person.id,
            name: person.name,
            surname: person.surname,
            profession: person.profession,
            salary: person.salary,
        };

        setEditData(inputValues);
    }

    function changePerson(data) {
        axios.put(`people/${data.id}`, data).then(() => {
            setEdit(false);
            loadData();
        });
    }

    function deletePerson(id) {
        axios.delete(`people/${id}`).then(() => loadData());
    }

    useEffect(() => {
        loadData();
    }, [loading]);

    return (
        <div>
            <h1 id="tabelLabel">Person DATA</h1>

            {loading ? (
                <p>
                    <em>Loading...</em>
                </p>
            ) : (
                <table className="table table-striped" aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Profession</th>
                            <th>Salary</th>
                            <th className="text-center">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AddRow
                            addPerson={addPerson}
                            handleAddPersonInputsChange={handleAddPersonInputsChange}
                            newPerson={newPerson}
                        />
                        {data.map((person, index) => (
                            <>
                                {edit === person.id ? (
                                    <EditRow
                                        key={index}
                                        person={person}
                                        editData={editData}
                                        setEdit={setEdit}
                                        handleEditChange={handleEditChange}
                                        changePerson={changePerson}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        key={index}
                                        person={person}
                                        deletePerson={deletePerson}
                                        selectPersonForChange={selectPersonForChange}
                                    />
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;
