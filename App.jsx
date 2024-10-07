import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes'
import './App.css'

function App() {

  const [pacientes, setPacientes] = useState([])
 
  const handleDelete = (id) => {
    const updatedTareas = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(updatedTareas);
  };


  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
      <Formulario pacientes={pacientes} setPacientes={setPacientes} /> 
      <ListadoPacientes pacientes={pacientes} handleDelete={handleDelete}/>   
      </div> 
    </div>
  );
}

export default App
