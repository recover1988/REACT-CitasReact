import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";
import generarId from "./utils/generadorId";
function App() {

	const [pacientes, setPacientes] = useState([
		{
			nombre: "pancho",
			propietario: "Eric",
			email: "eric@gmail.com",
			fecha: "2023-04-30",
			sintomas:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero cupiditate eveniet a, ullam vero alias magnam ratione placeat ad voluptatem repudiandae. Tempore laboriosam inventore asperiores maxime ea facilis et.",
			id: generarId(),
		},
		{
			nombre: "felix",
			propietario: "Lizeth",
			email: "lizeth@gmail.com",
			fecha: "2023-04-22",
			sintomas:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero cupiditate eveniet a, ullam vero alias magnam ratione placeat ad voluptatem repudiandae. Tempore laboriosam inventore asperiores maxime ea facilis et.",
			id: generarId() + "sdas",
		},
	]);

	console.log(pacientes);
	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<Form setPacientes={setPacientes} />
				<ListPatients pacientes={pacientes} />
			</div>
		</div>
	);
}

export default App;
