import Employee from "./components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      
      {  showEmployees ? (
          <>
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </> 
      ) : (
        <p>You do not have access to the employee list</p>
      )}
      
    </div>
  );
}

export default App;
