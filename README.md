<h1>Lista de Tarefas - ListaCoteFacil</h1>

Descrição do Projeto

O projeto Lista de Tarefas é uma aplicação React que permite aos usuários criar, visualizar, filtrar, buscar, completar e excluir tarefas. Ele utiliza TypeScript para tipagem estática, styled-components para estilização, e localStorage para persistência de dados no navegador.

Funcionalidades

Criar Tarefa: Adiciona uma nova tarefa à lista.

Excluir Tarefa: Remove uma tarefa existente da lista.

Completar Tarefa: Marca uma tarefa como concluída.

Filtrar Tarefas: Filtra as tarefas por status (todas, pendentes ou concluídas).

Buscar Tarefa: Permite buscar tarefas pelo texto.

Persistência de Dados: Os dados das tarefas são salvos no localStorage e restaurados automaticamente ao recarregar a página.

Estrutura do Projeto

Principais Componentes

Formulario: Componente principal que organiza a aplicação.

Renderiza os subcomponentes para busca, filtro e a lista de tarefas.

Gerencia o estado das tarefas, busca e filtro.

Buscador: Componente responsável pelo campo de busca.

Filtro: Componente para selecionar o status das tarefas (todas, pendentes ou concluídas).

Tarefas: Renderiza cada tarefa individualmente, com opções para completar ou excluir.

GeradorDeTarefas: Formulário para adicionar novas tarefas.

Principais Serviços

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

Dependências

As principais dependências do projeto incluem:

React: Biblioteca para criação de interfaces de usuário.

TypeScript: Superset de JavaScript com tipagem estática.

styled-components: Biblioteca para estilização com CSS-in-JS.

Vite: Ferramenta de build para desenvolvimento rápido.

Scripts Disponíveis

dev: Inicia o servidor de desenvolvimento.

build: Realiza o build de produção, utilizando TypeScript e Vite.

lint: Executa o ESLint para análise de código.

preview: Visualiza o build de produção.

Configuração do Projeto

Instalação

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

Estrutura do Estado

Estados Gerenciados

tarefas: Array de tarefas com a interface InterfaceTarefas. As tarefas são recuperadas do localStorage no início.

buscar: String para buscar tarefas pelo texto.

filtro: Status atual do filtro, podendo ser "All", "Pendentes" ou "Concluídas".

Interface das Tarefas (InterfaceTarefas)

interface InterfaceTarefas {
  id: number;
  texto: string;
  completada: boolean;
}

Fluxo de Dados

Adicionar Tarefa: Através do GeradorDeTarefas, chama-se o serviço CriarTarefa, que atualiza o estado tarefas.

Filtrar Tarefas: O estado filtro determina quais tarefas são renderizadas.

Buscar Tarefas: O estado buscar filtra as tarefas pelo texto.

Completar/Excluir Tarefa: As funções CompletarTarefa e ExcluirTarefa atualizam o estado tarefas, refletindo as mudanças.

Contribuição

Crie uma branch para sua feature/bugfix:

git checkout -b minha-feature

Faça commit de suas mudanças:

git commit -m "Descrição da mudança"

Envie as mudanças para o repositório remoto:

git push origin minha-feature

Abra um Pull Request na branch principal do projeto.
