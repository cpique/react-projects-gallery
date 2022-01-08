import './App.css';
import Menu from './Menu';
import data from './data/data'

function App() {
  return (
    <div>
      <header className="App-header">
        <Menu title="Recipes" recipes={data} />
      </header>
    </div>
  );
}

export default App;
