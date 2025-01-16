import { useState } from 'react';


interface GeradorDeTarefasProps {
    addTarefa: (tarefaTexto: string, tarefaCategoria: string) => void;
  }


const GeradorDeTarefas: React.FC<GeradorDeTarefasProps> = ({ addTarefa }) => {
  const [value, setValue] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (value.trim() === "" || categoria.trim() === "") {
        alert("NÃO É POSSIVEL ADICIONAR UMA TAREFA SEM TEXTO OU CATEGORIA");
        return;
      }
  
      addTarefa(value, categoria);
      setValue("");
      setCategoria("");
    };



  return (
    <div className="gerador-form">
      <h2>Criar nova tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          value={value}
          type="text" 
          placeholder="Digite o título" 
          onChange={evento => setValue(evento.target.value)} 
        />
        <select 
          value={categoria}
          onChange={evento => setCategoria(evento.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudo</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default GeradorDeTarefas;