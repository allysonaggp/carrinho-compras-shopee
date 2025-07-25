// Quais ações meu carrinho pode fazer 

// Casos de uso 

//✅->Adicionar item no carrinho 
async function addIten(userCart, item) {
    userCart.push(item)
}

//✅->Calcular total
async function calculateTotal(userCart) {
    const total = (userCart.reduce((total, item) => total + item.subtotal(), 0))
    console.log("\n--------------------------------")
    console.log("Shopee Cart Total IS:")
    console.log(`🛒 Total R$:${total}`)
}

//✅->Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

//✅->Remover um item - diminui um item
async function removeItem(userCart, item) {
    
    //1. Encontrar o index do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    
    //2. Caso nao encontre o item reteornao nao encontrado
    if (indexFound == -1) {
        console.log("nao encontrado")
        return
    }
    
    //3. Se item > 1 ,subitrair item. Se item = 1 deletar o item 
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return
    }
    
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return
    }
}

//✅->Mostra todos os itens ddo carrinho 
async function displayCart(userCart) {
    console.log("\n🎁  Shopee cart list: 🎁")
    userCart.forEach((item, index) => {
        console.log(`✅ ${index + 1}. ${item.name} - R$:${item.price} | ${item.quantity}X D| Subtotal = R$:${item.subtotal()}`)
    })

}


export {
    addIten,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}