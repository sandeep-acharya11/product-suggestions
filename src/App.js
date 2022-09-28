import './App.css';

function App() {
  return (
    <div className="App-1">
      <header className="App-header-1">
        <p>
          <a href='https://www.google.com'>learn react</a>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.....
          <h5>Base URL : {process.env.REACT_APP_baseUrl}</h5>
        </p>

      </header>
    </div>
  );
}

export default App;
