import quotes from "./quotes.json"

const QuotesRamdon = () => {
 let aux = Math.floor(Math.random()*quotes.quotes.length)
 return quotes.quotes[aux]
}

export default QuotesRamdon