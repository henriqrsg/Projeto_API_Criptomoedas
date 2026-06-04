export const moedas = ['bitcoin', 'ethereum', 'cardano', 'dogecoin', 'litecoin']

const api_url = 'https://api.coingecko.com/api/v3/simple/price'

export async function buscarPrecos(){

    const ids = moedas.join(',')
    const url = `${api_url}?vs_currencies=brl&ids=${ids}`

    const response = await fetch(url)
    const dados = await response.json()

    return dados

}