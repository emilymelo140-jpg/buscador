async function buscar () {
const response = await fetch (`https://viacep.com.br/ws/${55014658}/json/`)
let endereco = await response.json()

console.log(endereco)
}