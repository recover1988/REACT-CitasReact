import Patient from "./Patient";

const ListPatients = () => {
	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen mx-5 px-5 h-screen">
			<h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
			<p className="text-xl mt-5 mb-10 text-center">
				Administra tus {""}{" "}
				<span className="text-color6 font-bold ">Pacientes y Citas</span>
			</p>
			<div className=" h-full overflow-y-scroll  scrollbar-thumb-color6 scrollbar-track-color4 scrollbar-thin">
				<Patient />
				<Patient />
				<Patient />
				<Patient />
				<Patient />
			</div>
		</div>
	);
};

export default ListPatients;
