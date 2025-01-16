import React from 'react';
import { EstiloTituloFormulario } from '../../Estilos/formulario';
import { EstiloEntradaDeTexto } from '../../Estilos/EntradaDeTexto';

interface BuscadorProps {
  buscar: string;
  setBuscar: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<BuscadorProps> = ({ buscar, setBuscar }) => {
  return (
    <div className="buscador">
      <EstiloTituloFormulario>Buscar tarefa</EstiloTituloFormulario>
      <EstiloEntradaDeTexto
        value={buscar} 
        placeholder="Digite para pesquisar"
        type="text" 
        onChange={evento => setBuscar(evento.target.value)}
      />
    </div>
  );
}

export default Buscador;