##Loja de Carros

Este projeto é uma aplicação web que exibe informações sobre uma seleção de supercarros de luxo. A aplicação é construída usando React e Axios para fazer requisições HTTP a um servidor local. Os dados sobre os carros são carregados dinamicamente a partir de um endpoint e apresentados de maneira estilizada na interface do usuário.

Funcionalidades
Exibição de Supercarros: Lista de supercarros com detalhes como imagem, modelo, marca, descrição, quilometragem e preço.
Interface Dinâmica: Atualização automática dos dados ao carregar a página.
Design Interativo: Interface visualmente atraente com uso de CSS para estilização.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
Axios: Cliente HTTP baseado em promessas para fazer requisições ao servidor.
CSS: Folhas de estilo em cascata para estilização da aplicação.
Como Executar o Projeto
Clone o repositório para sua máquina local.
Navegue até o diretório do projeto.
Instale as dependências usando o comando npm install.
Inicie o servidor backend que fornece os dados dos carros.
Execute o comando npm start para iniciar a aplicação React.
Estrutura dos Dados
A API retorna um array de objetos, onde cada objeto representa um supercarro com as seguintes propriedades:

id: Identificador único do carro.
descricao: Descrição do carro.
imagem: URL da imagem do carro.
marca: Marca do carro.
modelo: Modelo do carro.
quilometragem: Quilometragem do carro.
preco: Preço do carro.
