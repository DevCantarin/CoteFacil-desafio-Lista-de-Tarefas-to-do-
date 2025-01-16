import { useState } from 'react';
import '../../App.css';
import { InterfaceTarefas } from '../../Interfaces/Tarefas';
import { AppContainer,  } from '../../Estilos/App';
import Buscador from '../Buscador';
import Filtro from '../Filtro';
import Tarefas from '../Tarefas';
import GeradorDeTarefas from '../Tarefas/GeradorDeTArefas';
import { EstiloFormulario, EstiloTituloFormulario } from '../../Estilos/formulario';

function Formulario() {
  const [tarefas, setTarefas] = useState<InterfaceTarefas[]>([]);
  const [buscar, setBuscar] = useState("");
  const [filtro, setFiltro] = useState("All");



  const criarTarefa = (tarefaTexto: string, tarefaCategoria: string) => {
    if (tarefaTexto.trim() === "" || tarefaCategoria.trim() === ""){
      alert("NÃO É POSSIVEL ADICIONAR UMA TAREFA SEM TEXTO OU CATEGORIA");
      return;
    } 
      

    setTarefas([
      ...tarefas,
      {
        id: tarefas.length + 1,
        texto: tarefaTexto,
        categoria: tarefaCategoria,
        commpletada: false,
      },
    ]);
  };

  const excluirTarefa = (id: number) => {
    const novotarefas = [...tarefas];
    const tarefasFiltrados = novotarefas.filter((tarefa) => 
      tarefa.id !== id? tarefa: null
    
    );
    setTarefas(tarefasFiltrados);
  };

  const completarTarefa = (id: number) => {
    const novotarefas = [...tarefas];
    novotarefas.map((tarefa) => tarefa.id===id ? tarefa.commpletada = !tarefa.commpletada : tarefa);
    setTarefas(novotarefas);
  };

  return (
    <AppContainer>
      <EstiloFormulario>
        <EstiloTituloFormulario>Lista de Tarefas</EstiloTituloFormulario>
        <Buscador buscar={buscar} setBuscar={setBuscar}/>
        <Filtro filtro={filtro} setFiltro={setFiltro}/>
        <div className="listaDeTarefas">
          {tarefas
            .filter ((tarefa)=> 
              filtro === "All" 
                ? true 
                : filtro === "Pendentes" 
                ? !tarefa.commpletada 
                : tarefa.commpletada)
                .filter((tarefa) => tarefa.texto.toLowerCase().includes(buscar.toLowerCase()))
                .map((tarefa) => (
                  <Tarefas
                  tarefa={tarefa}
                  removerTarefa={excluirTarefa}
                completarTarefa={completarTarefa}
                key={tarefa.id}
              />
            ))
          }
        </div>
        <GeradorDeTarefas addTarefa={criarTarefa} />
      </EstiloFormulario>
      </AppContainer>
  );
}
export default Formulario;