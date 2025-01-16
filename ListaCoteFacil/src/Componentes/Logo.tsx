import logo from "../img/Logo.png";
import { EstiloLogoContainer, EstiloLogoImage, EstiloTextoLogo } from "../Estilos/Logo";

function Logo() {
    return (
        <EstiloLogoContainer>
            <EstiloLogoImage src={logo} alt="Logo" />
            <EstiloTextoLogo>Plataforma de Cotações e Compras de Medicamentos e Perfumarias</EstiloTextoLogo>
        </EstiloLogoContainer>
    );
}

export default Logo;