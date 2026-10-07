import './style/style.css'
import { useState } from 'react'

function App() {

    const [etanolPrice, setEtanolPrice] = useState(0.0)
    const [gasolinaPrice, setGasolinaPrice] = useState(0.0)
    const [result, setResult] = useState("")

    function handleCalculate() {
        
        if (etanolPrice <= 0 || gasolinaPrice <= 0) {
            alert("Por favor, insira valores válidos para os preços do etanol e da gasolina.")
            return
        }

        let result = gasolinaPrice * 0.7

        if (etanolPrice < result) {
            setResult("Etanol é a melhor opção")
        }
        else {
            setResult("Gasolina é a melhor opção")
        }
    }

    function brazilianFormat(value: number): string{

        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    }
    return (
        <div className="App">
            <div className="App-main">        

                <img src="./src/assets/logo.png" alt="Logo" />   
                
                <h1>Qual é a melhor opção?</h1>
                
                <h4>Etanol preço por litro</h4>
                <input 
                type="number" 
                placeholder="Preço do Etanol"
                value={etanolPrice}
                onChange={(e) => setEtanolPrice(parseFloat(e.target.value) || 0)} 
                required
                />
                <h4>Gasolina preço por litro</h4>
                
                <input 
                type="number" 
                placeholder="Preço da Gasolina"
                value={gasolinaPrice}
                onChange={(e) => setGasolinaPrice(parseFloat(e.target.value) || 0)}
                required
                />
                
                <button onClick={handleCalculate}>
                    Calcular
                </button>
                
                {result && (
                    <div className="result">
                        <h4>{result}</h4>
                        <p>O preço da gasolina é: {brazilianFormat(gasolinaPrice)}</p>
                        <p>O preço do etanol é: {brazilianFormat(etanolPrice)}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App