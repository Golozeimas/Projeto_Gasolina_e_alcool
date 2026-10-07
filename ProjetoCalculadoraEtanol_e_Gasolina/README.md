# Calculadora de Etanol e Gasolina

Aplicação web desenvolvida com **React, TypeScript e Vite** para comparar os preços do etanol e da gasolina e indicar qual opção apresenta melhor custo-benefício com base na regra dos 70%.

## Funcionalidade

O usuário informa:

- preço do litro do etanol;
- preço do litro da gasolina.

A aplicação calcula:

```text
preço da gasolina × 0,70
```

Se o preço do etanol for menor que esse valor, o sistema recomenda o etanol. Caso contrário, recomenda a gasolina.

Exemplo:

```text
Gasolina: R$ 6,00
Etanol: R$ 3,90

6,00 × 0,70 = 4,20

Como 3,90 < 4,20:
Etanol é a melhor opção.
```

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- Oxlint

## Conceitos aplicados

O projeto utiliza recursos básicos do React e TypeScript, incluindo:

- `useState` para controle de estado;
- inputs controlados;
- tratamento de eventos;
- renderização condicional;
- validação de valores;
- tipagem com TypeScript.

## Estrutura

```text
ProjetoCalculadoraEtanol_e_Gasolina/
├── src/
│   ├── assets/
│   ├── style/
│   │   └── style.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Execução

### Pré-requisitos

- Node.js
- pnpm

### Clone o repositório

```bash
git clone https://github.com/Golozeimas/Projeto_Gasolina_e_alcool.git
```

### Acesse o diretório da aplicação

```bash
cd Projeto_Gasolina_e_alcool/ProjetoCalculadoraEtanol_e_Gasolina
```

### Instale as dependências

```bash
pnpm install
```

### Execute em ambiente de desenvolvimento

```bash
pnpm dev
```

A aplicação será disponibilizada pelo servidor de desenvolvimento do Vite.

## Scripts

```bash
pnpm dev
```

Inicia o ambiente de desenvolvimento.

```bash
pnpm build
```

Realiza a compilação do TypeScript e gera a build de produção.

```bash
pnpm preview
```

Executa localmente a build de produção.

```bash
pnpm lint
```

Executa a análise estática do projeto com Oxlint.

## Regra de cálculo

A lógica principal está implementada da seguinte forma:

```ts
const limiteEtanol = gasolinaPrice * 0.7

if (etanolPrice < limiteEtanol) {
    setResult("Etanol é a melhor opção")
} else {
    setResult("Gasolina é a melhor opção")
}
```

Também é realizada uma validação para impedir o cálculo com valores menores ou iguais a zero.

## Objetivo

Projeto desenvolvido para praticar fundamentos de desenvolvimento front-end com React e TypeScript, com foco em gerenciamento de estado, manipulação de formulários e implementação de uma regra de negócio simples.

## Autor

João Matheus Ramos Araujo

GitHub: [@Golozeimas](https://github.com/Golozeimas)