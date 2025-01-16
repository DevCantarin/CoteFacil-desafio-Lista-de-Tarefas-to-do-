import styled from "styled-components";

import logo from "../img/Logo.png";

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    
`; 

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Texto = styled.span`
    margin-top: 40px;
    margin-left: 20px;
    color: #868785;
    font: normal normal bold 23px / 29px Arial;
`;  

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <Texto>Plataforma de Cotações e Compras de Medicamentos e Perfumarias</Texto>
        </LogoContainer>
    );
}

export default Logo;