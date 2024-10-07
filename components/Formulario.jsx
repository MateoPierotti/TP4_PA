import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({ pacientes, setPacientes }) => {

  const [proyecto, setProyecto] = useState('')
  const [tipoTarea, setTipoTarea] = useState('')
  const [personaAsignada, setPersonaAsignada] = useState('')

  const [storyPoints, setStoryPoints] = useState('')
  const [prioridad, setPrioridad] = useState('')

  const [fecha, setFecha] = useState('')

  const [resumen, setResumen] = useState('')

  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    
    //validar que los campos esten llenos
    if([proyecto, tipoTarea, personaAsignada, fecha, resumen].includes('')) {
     

      setError(true);
      return
    }
      
      setError(false);

        //objeto con los datos del paciente
        const objetoPaciente = {
          id: uuidv4(), 
          proyecto,
          tipoTarea,
          personaAsignada,
          storyPoints,
          prioridad,
          fecha,
          resumen
        };
      
        //agregar el paciente al state
        setPacientes([
          ...pacientes,
          objetoPaciente
        ]);

        //reiniciar el formulario
        setProyecto('')
        setTipoTarea('')
        setPersonaAsignada('')
        setStoryPoints('')
        setPrioridad('')
        setFecha('')
        setResumen('')
      };
  

  return (
    <div className="w-1/2">
    <h2 className="text-3xl text-center">Seguimiento de Proyectos</h2>

    <p className="font-black text-lg mt-5 text-center mb-10">Añade {''}
    <span className="text-indigo-600 font-bold"> Proyectos</span></p>

    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
    {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">Todos los campos son obligatorios</p> : null}
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">proyecto</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="proyecto" 
       type="text" 
       placeholder="proyecto del paciente"
       value={proyecto}
       onChange={(e) => setProyecto(e.target.value)}
       />
  

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">tipoTarea</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="tipoTarea" 
       type="text" 
       placeholder="proyecto del tipoTarea"
        onChange={(e) => setTipoTarea(e.target.value)}
      value={tipoTarea}
       />
     
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="personaAsignada">Persona Asignada</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="personaAsignada" 
       type="tel" 
       placeholder="Nombre de la Persona Asignada"
       onChange={(e) => setPersonaAsignada(e.target.value)}
      value={personaAsignada}
       />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">StoryPoints</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="storyPoints" 
       type="number" 
       placeholder="StoryPoints"
        onChange={(e) => setStoryPoints(e.target.value)}
      value={storyPoints}
       />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">Prioridad</label>
      <select className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="prioridad" 
       onChange={(e) => setPrioridad(e.target.value)}
      value={prioridad}
       >
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="fecha" 
       type="date"
        onChange={(e) => setFecha(e.target.value)}/>
        fecha: {fecha}
    </div>


    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
      <textarea className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="resumen" 
       placeholder="Resumen"
        onChange={(e) => setResumen(e.target.value)}
      value={resumen}
       />
    </div>

    <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
    type="submit">Agregar Tarea</button>

    </form>

    </div>
  );
};
