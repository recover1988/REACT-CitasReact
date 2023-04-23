import React from "react";

const Patient = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const confirmar = confirm("Desea eliminar el paciente?");
    if (confirmar) {
      eliminarPaciente(paciente.id);
    }
  };
  return (
    <div className="bg-color3 shadow-lg rounded-lg px-5 py-10 mb-5">
      <p className="font-bold mb-3 text-color5 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-color5 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-color5 uppercase">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-color5 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-color5 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className=" flex mt-10 justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-blue-700 text-white font-bold uppercase rounded-lg hover:bg-blue-800"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white font-bold uppercase rounded-lg hover:bg-red-700"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
