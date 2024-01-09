import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p>
        
      </header>
      <div className='App-body'>
        <p>Login to access full dashboard</p>

      </div>

      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>

      </div>
    </div>
  );
}

export default App;
