import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {handleClose();
    }
  };

  return (
    <>
      <button onClick={handleShow} className="mx-auto m-2 px-4 py-1 text-sm border-emerald-600 text-slate-300 font-semibold rounded-full hover:text-white hover:bg-blue-600 hover:border-solid focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Update
      </button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
            onSubmit={(e) => {
              handleClose();
              e.preventDefault(); //prevent page from refreshing
              props.updateEmployee(props.id, name, role); //we haven't created a state function for ID, so we're passing it in as a prop
            }}
            id="editModal" 
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
              <label 
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                htmlFor="name"
              >
                Full Name
              </label>
              </div>
              <div className="md:w-2/3">
                <input 
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="name" 
                  type="text" 
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  onKeyDown={handleKeyPress}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label 
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                  for="role"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input 
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="role" 
                  type="text" 
                  value={role}
                  onChange={(e) => {setRole(e.target.value)}}
                  onKeyDown={handleKeyPress} />
              </div>
            </div>
           
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handleClose}
            onKeyDown={handleKeyPress}
          >
            Close
          </button>
          <button 
            className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
            form="editModal"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
