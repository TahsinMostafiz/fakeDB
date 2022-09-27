import React from 'react';
import { addToDB, removeFromDB } from '../../utilities/fakeDB';
import './Employee.css';

const Employee = (props) => {
    const {name, email, phone, gender, id, address, about, } = props.employee;


    const addToStorage = (id) => {
       addToDB(id);
    }

    const removeFromStorage = (id) => {
        removeFromDB(id);
    }
    return (
        <div className='main_container'>
            <div className="employee_card">
                <h2>Name : {name}</h2>
                <h6>Gender : {gender}</h6>
                <h5>Email : {email}</h5>
                <h6>Phone : {phone}</h6>
                <address>Address : {address}</address>
                <p>Id : {id}</p>
                <p><small>{about? about.slice(0,150) : about}</small></p>

                <button onClick={() => addToStorage(id)}>Add To Storage</button>
                <button onClick={() => removeFromStorage(id)}>Remove</button>

            </div>
        </div>
    );
};

export default Employee;