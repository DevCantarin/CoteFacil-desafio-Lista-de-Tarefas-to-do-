import React from 'react';

interface BuscadorProps {
  buscar: string;
  setBuscar: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<BuscadorProps> = ({ buscar, setBuscar }) => {
  return (
    <div className="buscador">
      <h2>Buscar tarefa</h2>
      <input
        value={buscar} 
        placeholder="Digite para pesquisar"
        type="text" 
        onChange={evento => setBuscar(evento.target.value)}
      />
    </div>
  );
}

export default Buscador;