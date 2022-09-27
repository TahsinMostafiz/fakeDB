import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setEmployees(data))
    }, []);

    return (
        <div>
            <h1>Information of Employees</h1>
            <div className="employees_div">
            {
                employees.map(employee => <Employee key={employee.id} employee={employee}></Employee>)
            }
            </div>
        </div>
    );
};

export default Employees;