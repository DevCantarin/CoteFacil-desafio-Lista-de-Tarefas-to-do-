import { InterfaceTarefas } from "../../Interfaces/Tarefas";

interface TarefasProps {
  tarefa: InterfaceTarefas;
  removerTarefa: (id: number) => void; 
  completarTarefa: (id: number) => void;
}


const Tarefas: React.FC<TarefasProps> = ({ tarefa, removerTarefa, completarTarefa }) => {
  return (
    <div className="tarefasCriadas" style={{
      textDecoration: tarefa.commpletada ? "line-through" : "",
      color: tarefa.commpletada ? "black" : "inherit"
    }}>
      <div className="cadaTarefa">
        <p>{`Nome da tarefa: ${tarefa.texto}`}</p>
        <p className="categoria">{`Categoria: ${tarefa.categoria}`}</p>
      </div>
      <div className="botoes">
        <button className='completar' onClick={() => completarTarefa(tarefa.id)}>{tarefa.commpletada ? "Desmarcar" : "Marcar"}</button>
        <button className='excluir' onClick={() => removerTarefa(tarefa.id)}>x</button>
      </div>
    </div>
  );
}

export default Tarefas;