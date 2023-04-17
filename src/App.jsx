import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";

function App() {
	const [pacientes, setPacientes] = useState([]);

	console.log(pacientes);
	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<Form setPacientes={setPacientes} />
				<ListPatients />
			</div>
		</div>
	);
}

export default App;
