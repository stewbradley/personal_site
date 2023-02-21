import './index.css';
import Employee from "./components/Employee";
import { useState } from "react"; 
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
// useState is an example of Hook. When things start with use, they are hooks
// hooks allow us to use state in functional components, without writing a class
function App() {
  // number 1 rule for state, never assign it directly
  const [employees, setEmployees] = useState([
       {
        id: 1,
        name: 'Stew', 
        role: 'Admin', 
        img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
      },
      {
        id: 2,
        name: 'Kunal', 
        role: 'Admin', 
        img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
      },
      {
        id: 3,
        name: 'Behzod', 
        role: 'Contributor', 
        img: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg',
      },
      {
        id: 4,
        name: 'Nick', 
        role: 'Contributor', 
        img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
      },
      {
        id: 5,
        name: 'Nick', 
        role: 'Contributor', 
        img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
      },
      {
        id: 6,
        name: 'Nick', 
        role: 'Contributor', 
        img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
      },
      {
        id: 7,
        name: 'Nick', 
        role: 'Contributor', 
        img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
      },
      {
        id: 8,
        name: 'Nick', 
        role: 'Contributor', 
        img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg',
      }
    ]);
    function updateEmployee(id, newName, newRole) {
      const updatedEmployees = employees.map((employee) => {
        // syntatic sugar meant to simplify, destructuring and arrow functions came out in ES6
        // map alwa
        if (id === employee.id) {
          return {
            ...employee,
            name: newName,
            role: newRole,
          };
        }
        return employee;
      });
      setEmployees(updatedEmployees);
    }
    function newEmployee(name, role, img) {
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      };
      setEmployees([...employees, newEmployee]);
    }
  const showEmployees = true;
  return (
    <div className= "App">
        {showEmployees ? (
          <>
            <input 
              type="text" 
              onChange={(e) => {
                // setRole(e.target.value)
              }}
            />
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                const editEmployee = ( 
                  <EditEmployee 
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    updateEmployee={updateEmployee}
                  />
                );
                return (
                    <Employee 
                      key={employee.id}
                      {...employee}
                      editEmployee={editEmployee} 
                    />
                );
              })}
            </div>
            <div className="border-amber-200 flex flex-wrap justify-center">
              <AddEmployee newEmployee={newEmployee} /> 
            </div>
          </> 
        ) : (
      <p>You do not have access to the employee list</p>
      )}
      
    </div>
  );
}

export default App;
