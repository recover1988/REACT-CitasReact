import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";
import generarId from "./utils/generadorId";
function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    setPacientes((state) => state.filter((p) => p.id !== id));
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListPatients
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
