import {
    EstiloConteudoRodape,
    EstiloCopyrightRodape,
    EstiloRodape,
    EstiloSpanRodape,
    EstiloTelefonesRodape,
    EstiloTHrRodape,
    EstiloTitulooRodape
  } from './../../Estilos/RodaPe';
  
//   usei essa fake api para poder deixar as informacoes de uma maneira mais dinamica
  const Rodape = () => {
    const telefones = [
      { cidade: 'São Paulo', telefone: '(11) 4063.5591' },
      { cidade: 'Brasília', telefone: '(61) 4063.9682' },
      { cidade: 'Rio de Janeiro', telefone: '(21) 4063.9439' },
      { cidade: 'Belo Horizonte', telefone: '(31) 4063.9473' },
      { cidade: 'Curitiba', telefone: '(41) 4063.9572' },
      { cidade: 'Florianópolis', telefone: '(48) 4052.9682' },
      { cidade: 'Suporte e Sucesso do Cliente', telefone: '(11) 94525-7170' },
      { cidade: 'Time de Vendas', telefone: '(11) 4063-5591' },
    ];
  
    return (
      <EstiloRodape>
        <EstiloConteudoRodape>
          <EstiloTitulooRodape>
            <EstiloSpanRodape>
              <strong>Contato</strong>
            </EstiloSpanRodape>
          </EstiloTitulooRodape>
          <EstiloTelefonesRodape>
            {telefones.map(({ cidade, telefone }, index) => (
              <div key={index} style={{ color: 'inherit' }}>
                <strong>{cidade}</strong>
                {telefone && <div>{telefone}</div>}
              </div>
            ))}
          </EstiloTelefonesRodape>
          <EstiloTHrRodape />
          <EstiloCopyrightRodape>
            <p>Avenida Andromeda, 885 - Conj. 704 - Alphaville Empresarial - CEP 06473-000 - Barueri/SP</p>
            <p>CNPJ: 08.935.739/0001-05 - Inscrição Estadual: Isenta</p>
            <p>©2025 Cotefácil - Todos os direitos reservados.</p>
          </EstiloCopyrightRodape>
        </EstiloConteudoRodape>
      </EstiloRodape>
    );
  };
  
  export default Rodape;
  