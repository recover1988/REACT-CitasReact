import React from "react";

const Patient = ({ paciente }) => {
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
		</div>
	);
};

export default Patient;
