import { useState } from "react";
import { InterfaceTarefas } from "../../Interfaces/Tarefas";

interface TarefasProps {
  tarefa: InterfaceTarefas;
  removerTarefa: (id: number) => void;
  completarTarefa: (id: number) => void;
  editarTarefa: (id: number, novoTexto: string) => void;
}

const Tarefas: React.FC<TarefasProps> = ({ tarefa, removerTarefa, completarTarefa, editarTarefa }) => {
  const [editando, setEditando] = useState(false);
  const [novoTexto, setNovoTexto] = useState(tarefa.texto); 

  const salvarEdicao = () => {
    if (novoTexto.trim() === "") {
      alert("Por Favor insira um texto");
      return;
    }
    editarTarefa(tarefa.id, novoTexto); 
    setEditando(false); 
  };

  const cancelarEdicao = () => {
    setNovoTexto(tarefa.texto); 
    setEditando(false); 
  };

  return (
    <div
      className="tarefasCriadas"
      style={{
        textDecoration: tarefa.commpletada ? "line-through" : "",
        color: tarefa.commpletada ? "black" : "inherit",
      }}
    >
      <div className="cadaTarefa">
        {editando ? (
          <input
            type="text"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") salvarEdicao(); 
              if (e.key === "Escape") cancelarEdicao(); 
            }}
          />
        ) : (
          <p>{`Nome da tarefa: ${tarefa.texto}`}</p>
        )}
      </div>
      <div className="botoes">
        {editando ? (
          <>
            <button className="salvar" onClick={salvarEdicao}>
              Salvar
            </button>
            <button className="cancelar" onClick={cancelarEdicao}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              className="completar"
              onClick={() => completarTarefa(tarefa.id)}
            >
              {tarefa.commpletada ? "Desmarcar" : "Marcar"}
            </button>
            <button
              className="excluir"
              style={{ marginRight: "5px" }}
              onClick={() => removerTarefa(tarefa.id)}
            >
              x
            </button>
            <button
              className="editar"
              onClick={() => setEditando(true)}
            >
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Tarefas;
