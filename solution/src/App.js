import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

const initial = [
  { name: "John", location: "Germany"},
]

function App() {
  const [persons, setPerson] = useState(initial)

  const handleAddPerson = (name, location) => {
    const newPerson = { name, location }
    setPerson( [ ...persons, newPerson ])
  }


  return (
    <div class="container">
        <div className='d-flex flex-column mt-5 align-items-center justify-content-center'>
      {/* Form Component */}
      <Form addPerson={handleAddPerson} />

     {/* Table Component */}
      <Table persons={persons} />

    </div>
    </div>
    
  );
}

export default App;
