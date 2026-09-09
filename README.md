<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=10BCF7&height=180&section=header&text=Manipulação+de+Dados+e+Arquivos+JSON+em+TypeScript&fontSize=25&fontColor=ffffff&animation=twinkling&fontAlignY=35"/>

Este projeto demonstra como criar modelos de dados strongly-typed em TypeScript, manipular arrays em memória e persistir dados localmente utilizando o módulo nativo `fs` (File System) do Node.js.

## Funcionalidades

- **Tipagem Estática (Models):** Definição de tipos customizados (`livro`, `amigo`, `famososFav`, `hobby`) para garantir a integridade dos dados.
- **Manipulação de Arrays:** Uso de métodos nativos do JavaScript para iterar (`forEach`), filtrar (`filter`) e buscar (`find`).
- **Persistência em Disco:** Criação dinâmica de diretórios e salvamento de dados formatados em JSON (`.json`).
- **Leitura de Dados:** Carregamento de arquivos JSON e conversão de volta para objetos TypeScript.

---

## Estrutura das Modelagens (`types`)

O código define as seguintes estruturas de dados principais:

| Tipo | Propriedades | Descrição |
| :--- | :--- | :--- |
| **`livro`** | `titulo`, `autor`, `ano`, `lido`, `genero?` | Representa um livro (com gênero opcional). |
| **`famososFav`** | `nome`, `idade` | Estrutura para armazenar celebridades favoritas. |
| **`amigo`** | `nome`, `ondeConheci`, `famosoConhecido`, `hobbies` | Estrutura complexa que aninha outros tipos. |

---

## Passo a Passo do Código

### 1. Manipulação em Memória
* **Criação do Array:** O array `livros` recebe objetos do tipo `livro`.
* **Iteração (`forEach`):** Percorre a lista e exibe cada item formatado no console.
* **Filtragem (`filter`):** Cria um novo array apenas com os livros marcados como `lido: true`.
* **Busca (`find`):** Localiza a primeira ocorrência do livro com o título `"1984"`.

### 2. Operações com Arquivos (`fs`)
1. **Verificação de Diretório:** O método `existsSync` checa se a pasta `data/` existe.
2. **Criação de Pasta:** Caso não exista, `mkdirSync` cria o diretório dinamicamente.
3. **Escrita (`writeFileSync`):** Converte o array para string via `JSON.stringify(livros, null, 2)` (com identação legível de 2 espaços) e salva no arquivo `data/livros.json`.
4. **Leitura (`readFileSync` + `JSON.parse`):** Lê o conteúdo do arquivo físico em formato UTF-8 e o reconverte para um array tipado (`livro[]`).

---

## Como Executar

### Pré-requisitos
* **Node.js** instalado.
* **TypeScript** e **ts-node** (ou `tsx`) configurados no projeto.

### Passos
1. Instale as dependências de tipos do Node (se necessário):
   ```bash
   npm install -D @types/node typescript ts-node
