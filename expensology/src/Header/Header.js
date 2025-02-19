import './header.css';
import logo from './expensology-rounded-icon.png';


function Header() {
    return (
        <header className="App-header">
        <div className="App-brand-container">
          <img src={logo} className="App-logo" alt="logo"/>
          <div>
            <h1 className="App-name">Expensology</h1>
            <h5 className="App-tagline">Smart Expense Tracking, Simplified.</h5>
          </div>
        </div>
      </header>
    );
}

export default Header;