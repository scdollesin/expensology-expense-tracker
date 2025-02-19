import logo from './expensology-rounded-icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-brand-container">
          <img src={logo} className="App-logo" alt="logo"/>
          <div>
            <h1 className="App-name">Expensology</h1>
            <h5 className="App-tagline">Smart Expense Tracking, Simplified.</h5>
          </div>
        </div>
      </header>
      <main className="App-main">

      </main>
    </div>
  );
}

export default App;
