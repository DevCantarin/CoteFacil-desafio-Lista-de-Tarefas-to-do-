interface FiltroProps {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
    ordem?: string;
    setOrdem: React.Dispatch<React.SetStateAction<string>>; 
  }
  
  const Filtro = ({ filtro, setFiltro, setOrdem }: FiltroProps) => {
    return (
      <div className="filtro">
        <h2>Filtrar tarefas</h2>
        <div className="filtro-opcoes">
          <p>Status</p>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Pendentes">Pendentes</option>
            <option value="Completas">Completas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética</p>
          <button onClick={() => setOrdem("Ascendente")}>Ascendente</button>
          <button onClick={() => setOrdem("Descendente")}>Descendente</button>
        </div>
      </div>
    );
  };
  
  export default Filtro;
  