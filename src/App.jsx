import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const toma1valor = (valor) => {
		console.log(valor);
	};
	return (
		<div className="container mx-auto mt-20">
			<Header
				numeros={1}
				isAdmin={false}
				toma1valor={toma1valor}
			/>
			<div className="mt-12 md:flex">
				<Form />
				<ListPatients />
			</div>
		</div>
	);
}

export default App;
