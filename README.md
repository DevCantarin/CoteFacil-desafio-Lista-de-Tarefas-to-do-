<h1>Lista de Tarefas - ListaCoteFacil</h1>

<h2> Descrição do Projeto </h2>

O projeto Lista de Tarefas é uma aplicação React que permite aos usuários criar, visualizar, filtrar, buscar, completar e excluir tarefas. Ele utiliza TypeScript para tipagem estática, styled-components para estilização, e localStorage para persistência de dados no navegador.

<h2> 
Tags
</h2> 

React

TypeScript

Vite

Styled-Components

LocalStorage

Gerenciamento de Estado

<h2>
  
Funcionalidades
</h2>


Criar Tarefa: Adiciona uma nova tarefa à lista.

Excluir Tarefa: Remove uma tarefa existente da lista.

Completar Tarefa: Marca uma tarefa como concluída.

Filtrar Tarefas: Filtra as tarefas por status (todas, pendentes ou concluídas).

Buscar Tarefa: Permite buscar tarefas pelo texto.

Persistência de Dados: Os dados das tarefas são salvos no localStorage e restaurados automaticamente ao recarregar a página.


<h2>
  
Estrutura do Projeto
</h2>


<h3>
  
Principais Componentes
</h3>

Formulario: Componente principal que organiza a aplicação.

Renderiza os subcomponentes para busca, filtro e a lista de tarefas.

Gerencia o estado das tarefas, busca e filtro.

Buscador: Componente responsável pelo campo de busca.

Filtro: Componente para selecionar o status das tarefas (todas, pendentes ou concluídas).

Tarefas: Renderiza cada tarefa individualmente, com opções para completar ou excluir.

GeradorDeTarefas: Formulário para adicionar novas tarefas.


<h2>
Principais Serviços
  
</h2>


Os serviços estão localizados no diretório ../../Servicos/Taregas:

TarefasLocalStorage: Recupera as tarefas salvas no localStorage.

CriarTarefa: Adiciona uma nova tarefa à lista.

ExcluirTarefa: Remove uma tarefa específica.

CompletarTarefa: Alterna o status de completada de uma tarefa.

Estilização

Os estilos são definidos utilizando styled-components:

AppContainer: Container principal da aplicação.

EstiloFormulario: Estilização do formulário principal.

EstiloTituloFormulario: Título da aplicação.


<h2>
  
Dependências
</h2>

As principais dependências do projeto incluem:

React: Biblioteca para criação de interfaces de usuário.

TypeScript: Superset de JavaScript com tipagem estática.

styled-components: Biblioteca para estilização com CSS-in-JS.

Vite: Ferramenta de build para desenvolvimento rápido.


<h2>
  
Scripts Disponíveis
</h2>

dev: Inicia o servidor de desenvolvimento.

build: Realiza o build de produção, utilizando TypeScript e Vite.

lint: Executa o ESLint para análise de código.

preview: Visualiza o build de produção.

Configuração do Projeto


<h2>
  
Instalação
</h2>

Clone o repositório:

git clone <url-do-repositorio>

Navegue até o diretório do projeto:

cd listacotefacil

Instale as dependências:

npm install

Uso

Inicie o servidor de desenvolvimento:

npm run dev

Acesse a aplicação no navegador pelo endereço exibido (geralmente http://localhost:5173).


<h2>
  
Estrutura do Estado
</h2>

<h3>
Estados Gerenciados
  
</h3>

tarefas: Array de tarefas com a interface InterfaceTarefas. As tarefas são recuperadas do localStorage no início.

buscar: String para buscar tarefas pelo texto.

filtro: Status atual do filtro, podendo ser "All", "Pendentes" ou "Concluídas".

Interface das Tarefas (InterfaceTarefas)

interface InterfaceTarefas {
  id: number;
  texto: string;
  completada: boolean;
}


<h2>
  
Fluxo de Dados
</h2>

Adicionar Tarefa: Através do GeradorDeTarefas, chama-se o serviço CriarTarefa, que atualiza o estado tarefas.

Filtrar Tarefas: O estado filtro determina quais tarefas são renderizadas.

Buscar Tarefas: O estado buscar filtra as tarefas pelo texto.

Completar/Excluir Tarefa: As funções CompletarTarefa e ExcluirTarefa atualizam o estado tarefas, refletindo as mudanças.

<h2>
  
Status do Projeto
</h2>

O projeto está em desenvolvimento ativo, com os seguintes status:

Funcionalidades principais implementadas.

Testes e melhorias contínuas em andamento.

Sugestões e contribuições são bem-vindas.
