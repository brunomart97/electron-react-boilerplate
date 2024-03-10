import { useHelloWorldContext } from './hooks/useHelloWorldContext'
import logo from './logo.svg'
import './App.css'

function App() {
  const { helloWorld } = useHelloWorldContext()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Electron-React Boilerplate</code>
        </p>
        <span>
          <code>Electron context: {helloWorld}</code>
        </span>
      </header>
    </div>
  )
}

export default App
