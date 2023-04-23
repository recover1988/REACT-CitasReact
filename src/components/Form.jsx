import { useState, useEffect } from "react";
import Error from "./Error";
import generarId from "../utils/generadorId";

const Form = ({ setPacientes }) => {
	const [datos, setDatos] = useState({
		nombre: "",
		propietario: "",
		email: "",
		fecha: "",
		sintomas: "",
		id: generarId(),
	});
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validar el formulario
		if (Object.values(datos).includes("")) {
			setError(true);
			console.log("Hay al menos un campo vacio");
			return;
		}

		setError(false);
		// Agregamos los datos al array de Pacientes
		setPacientes((state) => [...state, datos]);

		// Reiniciar el objeto datos
		setDatos((state) => ({
			nombre: "",
			propietario: "",
			email: "",
			fecha: "",
			sintomas: "",
			id: generarId(),
		}));
		console.log("Enviar Formulario");
	};
	const handleChange = (e) => {
		setDatos((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};
	// console.log(datos);
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-1">
			<h2 className="font-black text-3xl text-center">
				Seguimiento de Pacientes
			</h2>
			<p className="text-xl mt-5 text-center  mb-10">
				Añade Pacientes y{" "}
				<span className="text-color6 font-bold">Administralos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className="bg-color3 shadow-lg rounded-lg px-5 py-10 mb-10"
			>
				{error && (
					<Error>
						<p>Todos los campos son obligatorios</p>
					</Error>
				)}
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block text-color5 uppercase font-black"
					>
						Nombre de Mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota"
						className="bg-color3 border-2 border-color4 w-full p-2 mt-2 placeholder-color2 rounded-md"
						value={datos.nombre}
						name="nombre"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block text-color5 uppercase font-black"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario"
						className="bg-color3 border-2 border-color4 w-full p-2 mt-2 placeholder-color2 rounded-md"
						value={datos.propietario}
						name="propietario"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-color5 uppercase font-black"
					>
						Email de Contacto
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email Contacto Propietario"
						className="bg-color3 border-2 border-color4 w-full p-2 mt-2 placeholder-color2 rounded-md"
						value={datos.email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="block text-color5 uppercase font-black"
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="bg-color3 border-2 border-color4 w-full p-2 mt-2 placeholder-color2 rounded-md"
						value={datos.fecha}
						name="fecha"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block text-color5 uppercase font-black"
					>
						Sintomas
					</label>
					<textarea
						id="sintomas"
						cols="30"
						rows="5"
						placeholder="Describe los sintomas"
						className="bg-color3 border-2 border-color4 w-full p-2 mt-2 placeholder-color2 rounded-md"
						value={datos.sintomas}
						name="sintomas"
						onChange={handleChange}
					></textarea>
				</div>
				<input
					type="submit"
					className="bg-blue-700 w-full p-3 uppercase text-color1 font-bold rounded-md hover:bg-blue-800 cursor-pointer transition-all"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
};

export default Form;
