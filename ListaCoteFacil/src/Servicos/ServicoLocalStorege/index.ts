import { InterfaceTarefas } from "../../Interfaces/Tarefas";


export default function IncluirTarefaLocalStorage(tarefa: InterfaceTarefas[]) {
    localStorage.setItem("tarefas", JSON.stringify(tarefa));   
   
}