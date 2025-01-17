import { useState, useEffect } from "react";
import "../../App.css";
import { InterfaceTarefas } from "../../Interfaces/Tarefas";
import { AppContainer } from "../../Estilos/App";
import Buscador from "../Buscador";
import Filtro from "../Filtro";
import Tarefas from "../Tarefas";
import GeradorDeTarefas from "../Tarefas/GeradorDeTArefas";
import {
  EstiloFormulario,
  EstiloTituloFormulario,
} from "../../Estilos/formulario";
import {
  CompletarTarefa,
  CriarTarefa,
  ExcluirTarefa,
  TarefasLocalStorage,
} from "../../Servicos/Taregas";

function Formulario() {
  const [tarefas, setTarefas] = useState<InterfaceTarefas[]>(TarefasLocalStorage());
  const [buscar, setBuscar] = useState("");
  const [filtro, setFiltro] = useState("All");


  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);


  const handleCriarTarefa = (tarefaTexto: string, tarefaCategoria: string) => {
    const novasTarefas = CriarTarefa(tarefaTexto, tarefaCategoria, tarefas);
    setTarefas(novasTarefas);
  };

  const handleExcluirTarefa = (id: number) => {
    const tarefasAtualizadas = ExcluirTarefa(id, tarefas);
    setTarefas(tarefasAtualizadas);
  };

  const handleCompletarTarefa = (id: number) => {
    const tarefasAtualizadas = CompletarTarefa(id, tarefas);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <AppContainer>
      <EstiloFormulario>
        <EstiloTituloFormulario>Lista de Tarefas</EstiloTituloFormulario>
        <Buscador buscar={buscar} setBuscar={setBuscar} />
        <Filtro filtro={filtro} setFiltro={setFiltro} />
        <div className="listaDeTarefas">
          {tarefas &&
            tarefas
              .filter((tarefa) =>
                filtro === "All"
                  ? true
                  : filtro === "Pendentes"
                  ? !tarefa.commpletada
                  : tarefa.commpletada
              )
              .filter((tarefa) =>
                tarefa.texto.toLowerCase().includes(buscar.toLowerCase())
              )
              .map((tarefa, index) => (
                <Tarefas
                  tarefa={tarefa}
                  removerTarefa={handleExcluirTarefa}
                  completarTarefa={handleCompletarTarefa}
                  key={index}
                />
              ))}
        </div>
        <GeradorDeTarefas addTarefa={handleCriarTarefa} />
      </EstiloFormulario>
    </AppContainer>
  );
}

export default Formulario;
