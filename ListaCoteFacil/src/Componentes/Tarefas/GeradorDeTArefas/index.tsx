import { useState } from 'react';
import { EstiloTituloFormulario } from '../../../Estilos/formulario';
import {  } from '../../../Estilos/Botao';
import { EstiloBotao } from '../../../Estilos/Botao';
import { EstiloEntradaDeTexto } from '../../../Estilos/EntradaDeTexto';



interface GeradorDeTarefasProps {
    addTarefa: (tarefaTexto: string) => void;
  }


const GeradorDeTarefas: React.FC<GeradorDeTarefasProps> = ({ addTarefa }) => {
  const [value, setValue] = useState("");


  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (value.trim() === "" ) {
        alert("NÃO É POSSIVEL ADICIONAR UMA TAREFA SEM TEXTO OU CATEGORIA");
        return;
      }
  
      addTarefa(value);
      setValue("");

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

        <EstiloBotao type="submit">Criar Tarefa</EstiloBotao>
      </form>
    </div>
  );
};

export default GeradorDeTarefas;