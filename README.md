# 🛒 Carrinho de Compras Shopee

Este é um projeto simples e modular de carrinho de compras, inspirado na experiência da Shopee do curso de NODE JS da DIO.me. Ele permite criar itens com subtotal automático, adicionar/remover/deletar produtos do carrinho, visualizar o conteúdo e calcular o valor total.

## 📁 Estrutura do Projeto

```
carrinho-compras-shopee/
├── services/
│   ├── cart.js       # Funções de manipulação do carrinho
│   └── itens.js      # Função para criar itens com subtotal
├── main.js           # Script principal de execução
├── package.json      # Metadados do projeto
```

## 🚀 Funcionalidades

- Criar itens com subtotal calculado automaticamente
- Adicionar itens ao carrinho
- Remover uma unidade de um item
- Deletar completamente um item
- Listar todos os itens do carrinho
- Calcular o total do carrinho

## 📦 Exemplo de Item

Cada item é um objeto com a seguinte estrutura:

```js
{
  name: "Nome do Produto",
  price: 10.0,
  quantity: 2,
  subtotal: () => price * quantity
}
```

Você pode criar um item com:

```js
import createItem from './services/itens.js';

const item = await createItem("Produto X", 25.00, 2);
```

## 🧪 Exemplo de Uso Completo

```js
import createItem from "./services/itens.js"
import * as cartService from "./services/cart.js"

const myCart = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lambordini", 39.99, 3)

await cartService.addIten(myCart, item1)
await cartService.addIten(myCart, item2)

// Remove 1 unidade do item2
await cartService.removeItem(myCart, item2)

// Exibe o carrinho
await cartService.displayCart(myCart)

// Mostra o total
await cartService.calculateTotal(myCart)
```

## ▶️ Como executar

1. Clone o projeto:
```bash
git clone https://github.com/allysonaggp/carrinho-compras-shopee.git
```

2. Acesse a pasta:
```bash
cd carrinho-compras-shopee
```

3. Execute com Node.js:
```bash
node main.js
```

> Certifique-se de usar o Node.js na versão com suporte a ES Modules (`type: "module"` no `package.json`).

