import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="block mx-auto m-2 bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Add Employee
      </button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setName('');
              setRole('');
              setImg(''); //prevent page from refreshing
              props.newEmployee(name, role, img); //we haven't created a state function for ID, so we're passing it in as a prop
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

              {/* Add a div element to contain the post title, date, and description */}
              <div className="text-left">
                <input 
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="name" 
                  placeholder="Steve Jobs"
                  type="text" 
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
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
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="role" 
                  placeholder="contributor"
                  type="text" 
                  value={role}
                  onChange={(e) => {setRole(e.target.value)}} />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label 
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                  for="img"
                >
                  Image URL
                </label>
              </div>
              <div className="md:w-2/3">
                <input 
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="img" 
                  placeholder="https://example.com/image.jpg"
                  type="text" 
                  value={img}
                  onChange={(e) => {setImg(e.target.value)}} />
              </div>
            </div>           
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            className="font-mono text-sm border-solid hover:border-double hover:bg-green-300 bg-slate-300 border-2 rounded px-2 border-zinc-500" // bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handleClose}
          >
            Close
          </button>
          <button 
            className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handleClose}
            form="editModal"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
