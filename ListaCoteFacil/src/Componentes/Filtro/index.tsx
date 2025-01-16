import { EstiloTituloFormulario } from "../../Estilos/formulario";
import { EstiloSelecao } from "../../Estilos/Selecao";

interface FiltroProps {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
    ordem?: string;
    setOrdem: React.Dispatch<React.SetStateAction<string>>; 
  }
  
  const Filtro = ({ filtro, setFiltro, setOrdem }: FiltroProps) => {
    return (
      <div className="filtro">
        <EstiloTituloFormulario>Filtrar tarefas</EstiloTituloFormulario>
        <div className="filtro-opcoes">
          <p>Status</p>
          <EstiloSelecao value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Pendentes">Pendentes</option>
            <option value="Completas">Completas</option>
          </EstiloSelecao>
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
  