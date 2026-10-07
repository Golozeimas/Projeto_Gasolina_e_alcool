import './style/style.css'

function App() {
    return (
        <div className="App">
            <div className="App-main">        

                <img src="./src/assets/logo.png" alt="Logo" />   
                
                <h1>Qual é a melhor opção?</h1>
                
                <h4>Etanol preço por litro</h4>
                <input type="number" placeholder="Preço do Etanol" />
                
                <h4>Gasolina preço por litro</h4>
                <input type="number" placeholder="Preço da Gasolina" />
                
                <button>Calcular</button>
            
            </div>
        </div>
    )
}

export default App