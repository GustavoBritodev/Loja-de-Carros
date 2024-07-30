## Loja de Carros
Este projeto é uma aplicação web que exibe informações sobre uma seleção de supercarros de luxo. A aplicação é construída usando React e Axios para fazer requisições HTTP a um servidor local. Os dados sobre os carros são carregados dinamicamente a partir de um endpoint e apresentados de maneira estilizada na interface do usuário.

## Funcionalidades

-   **Exibição de Supercarros**: Lista de supercarros com detalhes como imagem, modelo, marca, descrição, quilometragem e preço.
-   **Interface Dinâmica**: Atualização automática dos dados ao carregar a página.
-   **Design Interativo**: Interface visualmente atraente com uso de CSS para estilização.

## Tecnologias Utilizadas

-   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **Axios**: Cliente HTTP baseado em promessas para fazer requisições ao servidor.
-   **CSS**: Folhas de estilo em cascata para estilização da aplicação.

## Como Executar o Projeto

1.  Clone o repositório para sua máquina local.
    
    `git clone https://github.com/GustavoBritodev/Loja-de-Carros` 
    
2.  Navegue até o diretório do projeto.

    `cd seu-repositorio` 
    
3.  Instale as dependências usando o comando:

    `npm install` 
    
4.  Inicie o servidor backend que fornece os dados dos carros.

5.  Execute o comando para iniciar a aplicação React:
    
    `npm start` 
    

## Estrutura dos Dados

A API retorna um array de objetos, onde cada objeto representa um supercarro com as seguintes propriedades:

-   `id`: Identificador único do carro.
-   `descricao`: Descrição do carro.
-   `imagem`: URL da imagem do carro.
-   `marca`: Marca do carro.
-   `modelo`: Modelo do carro.
-   `quilometragem`: Quilometragem do carro.
-   `preco`: Preço do carro.


## Créditos

Desenvolvido por Gabriel Bay e Gustavo Brito.
