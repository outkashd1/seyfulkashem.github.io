import logo from './seyful.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Name is Seyful Kashem and I am going to master React
        </p>
        <a
          className="App-link"
          href="https://github.com/outkashd1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
