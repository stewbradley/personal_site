import './index.css';
import Employee from "./components/Employee";
import { useState } from "react"; 
import { v4 as uuidv4 } from 'uuid';
// useState is an example of Hook. When things start with use, they are hooks
// hooks allow us to use state in functional components, without writing a class
function App() {
  const [role, setRole] = useState('dev');
  // number 1 rule for state, never assign it directly
  const [employees, setEmployees] = useState([
       {
        name: "Stew", 
        role: "Admin", 
        img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
      },
      {
        name: "Kunal", 
        role: "Admin", 
        img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
      },
      {
        name: "Behzod", 
        role: "Contributor", 
        img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
      },
      {
        name: "Nick", 
        role: "Contributor", 
        img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
      }
    ]);
  const showEmployees = true;
  return (
    <div className= "App">
        {showEmployees ? (
          <>
            <input 
              type="text" 
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value)
              }}
            />
            <div className="flex flex-wrap">
              {employees.map((employee) => {
                return (
                  <Employee 
                    key={uuidv4()}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img} 
                  />
                );
              })}

            </div>
          </> 
      ) : (
        <p>You do not have access to the employee list</p>
      )}
      
    </div>
  );
}

export default App;
