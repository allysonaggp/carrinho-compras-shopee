import createItem from "./services/itens.js"
import * as cartService from "./services/cart.js"


const myCart = []
const myWishList = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lambordini", 39.99, 3)

// Adicionado dois itens no carrinho
await cartService.addIten(myCart, item1)
await cartService.addIten(myCart, item2)



//Remove o item do carrinho
await cartService.removeItem(myCart, item2)


//Deletado dois itens no carrinho
//await cartService.deleteItem(myCart, item1.name)
//await cartService.deleteItem(myCart, item2.name)


// mostra o display no console
await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart)
