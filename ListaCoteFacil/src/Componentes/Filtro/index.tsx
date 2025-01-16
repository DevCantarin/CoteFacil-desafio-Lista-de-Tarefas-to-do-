import { EstiloTituloFormulario } from "../../Estilos/formulario";
import { EstiloSelecao } from "../../Estilos/Selecao";

interface FiltroProps {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const Filtro = ({ filtro, setFiltro }: FiltroProps) => {
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

        </div>
      </div>
    );
  };
  
  export default Filtro;
  