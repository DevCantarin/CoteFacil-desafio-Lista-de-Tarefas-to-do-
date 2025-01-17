
import './App.css';
import Logo from './Componentes/Logo';
import Formulario from './Componentes/Formulario';
import { AppContainer } from './Estilos/App';
import Rodape from './Componentes/RodaPe';

function App() {
    return (
    <>
      <AppContainer>
        <Logo/>
        <Formulario/>
        </AppContainer>
        <Rodape/>
    </>
  );
}
export default App;