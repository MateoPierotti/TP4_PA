

export const Paciente = ({paciente, handleDelete }) => {

    const {id, proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fecha,  resumen} = paciente
    return (
        <div className="relative mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <button 
            onClick={() => handleDelete(id)} 
            className="absolute top-2 right-2 text-black bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
          >
            X
          </button>
          <p className="font-bold mb-3 text-gray-700 uppercase">Proyecto: {''}
            <span className="font-normal normal-case">{proyecto}</span>
          </p>
    
          <p className="font-bold mb-3 text-gray-700 uppercase">Tipo: {''}
            <span className="font-normal normal-case">{tipoTarea}</span>
          </p>
    
          <p className="font-bold mb-3 text-gray-700 uppercase">Persona: {''}
            <span className="font-normal normal-case">{personaAsignada}</span>
          </p>
    
          <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
            <span className="font-normal normal-case">{storyPoints}</span>
          </p>
    
          <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
            <span className="font-normal normal-case">{prioridad}</span>
          </p>
    
          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Creación: {''}
            <span className="font-normal normal-case">{fecha}</span>
          </p>
    
          <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
            <span className="font-normal normal-case">{resumen}</span>
          </p>
        </div>
      );
    };