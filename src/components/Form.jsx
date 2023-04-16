import { useState, useEffect } from "react";

const Form = () => {
	const [nombre, setNombre] = useState("Pancho");

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
				action=""
				className="bg-color3 shadow-lg rounded-lg px-5 py-10 mb-10"
			>
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
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
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
					></textarea>
				</div>
				<input
					type="submit"
					className="bg-color6 w-full p-3 uppercase text-color1 font-bold rounded-md hover:bg-opacity-80 cursor-pointer transition-all"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
};

export default Form;
