// Casos de uso dos itens

// -> Criar itens com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal:()=> price*quantity,
    }
}
 
export default createItem