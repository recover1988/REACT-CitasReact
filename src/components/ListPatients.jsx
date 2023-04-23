import Error from "./Error";
import Patient from "./Patient";

const ListPatients = ({ pacientes, setPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-5 px-5 h-screen">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}{" "}
        <span className="text-color6 font-bold ">Pacientes y Citas</span>
      </p>
      <div className=" h-full overflow-y-scroll  scrollbar-thumb-color6 scrollbar-track-color4 scrollbar-thin">
        {pacientes.length > 0 ? (
          pacientes.map((p) => (
            <Patient key={p.id} paciente={p} setPaciente={setPaciente} />
          ))
        ) : (
          <Error>
            <p>No hay datos</p>
          </Error>
        )}
      </div>
    </div>
  );
};

export default ListPatients;
