import { InterfaceTarefas } from "../../Interfaces/Tarefas";
import IncluirTarefaLocalStorage from "../ServicoLocalStorege";

export const TarefasLocalStorage = (): InterfaceTarefas[] => {
  const tarefas = localStorage.getItem("tarefas");
  try {
    const tarefasDoLocalStorage = tarefas ? JSON.parse(tarefas) : [];
    return Array.isArray(tarefasDoLocalStorage) ? tarefasDoLocalStorage : [];
  } catch (error) {
    console.error("Erro ao analisar tarefas do localStorage:", error);
    return [];
  }
};

export const CriarTarefa = (
  tarefaTexto: string,
  tarefas: InterfaceTarefas[]
): InterfaceTarefas[] => {
  if (tarefaTexto.trim() === "") {
    alert("NÃO É POSSIVEL ADICIONAR UMA TAREFA SEM TEXTO OU CATEGORIA");
    return tarefas;
  }

  const novasTarefas = [
    ...tarefas,
    {
      id: tarefas.length + 1,
      texto: tarefaTexto,
      commpletada: false,
    },
  ];

  IncluirTarefaLocalStorage(novasTarefas);
  return novasTarefas;
};

export const ExcluirTarefa = (
  id: number,
  tarefas: InterfaceTarefas[]
): InterfaceTarefas[] => {
  const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
  IncluirTarefaLocalStorage(tarefasFiltradas);
  return tarefasFiltradas;
};

export const CompletarTarefa = (
  id: number,
  tarefas: InterfaceTarefas[]
): InterfaceTarefas[] => {
  const novasTarefas = tarefas.map((tarefa) =>
    tarefa.id === id ? { ...tarefa, commpletada: !tarefa.commpletada } : tarefa
  );
  IncluirTarefaLocalStorage(novasTarefas);
  return novasTarefas;
};
