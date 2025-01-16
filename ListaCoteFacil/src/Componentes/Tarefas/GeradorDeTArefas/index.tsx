import { useState } from 'react';
import { EstiloTituloFormulario } from '../../../Estilos/formulario';
import {  } from '../../../Estilos/Botao';
import { EstiloBotao } from '../../../Estilos/Botao';
import { EstiloEntradaDeTexto } from '../../../Estilos/EntradaDeTexto';
import { EstiloSelecao } from '../../../Estilos/Selecao';


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
    <div>
      <EstiloTituloFormulario>Criar nova tarefa</EstiloTituloFormulario>
      <form onSubmit={handleSubmit}>
        <EstiloEntradaDeTexto 
          value={value}
          type="text" 
          placeholder="Digite o título da tarefa" 
          onChange={evento => setValue(evento.target.value)} 
        />
        <EstiloSelecao
          value={categoria}
          onChange={evento => setCategoria(evento.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudo</option>
        </EstiloSelecao>
        <EstiloBotao type="submit">Criar Tarefa</EstiloBotao>
      </form>
    </div>
  );
};

export default GeradorDeTarefas;