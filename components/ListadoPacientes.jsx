
import { Paciente } from "./Paciente"

export const ListadoPacientes = ({ pacientes, handleDelete }) => {

  console.log(pacientes)

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Tareas</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} 
      <span className="text-indigo-600 font-bold">Proyectos</span> aquí
      </p>

      { pacientes.length === 0 ? (
        <p className="text-center">No hay tareas</p>
      ) : (
      pacientes.map(paciente => (
        <Paciente key={paciente.id} paciente={paciente} handleDelete={handleDelete}/>
      ))
      )}
       
    </div>
  );
};
