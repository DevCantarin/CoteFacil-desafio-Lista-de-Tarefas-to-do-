import { InterfaceTarefas } from "../../Interfaces/Tarefas";


export default function IncluirTarefaLocalStorage(tarefa: InterfaceTarefas[]) {
    tarefa.map((tarefa) => localStorage.setItem(tarefa.id.toString(), JSON.stringify(tarefa)));    

}