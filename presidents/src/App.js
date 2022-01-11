import logo from './logo.svg';
import './App.css';
import Timeline from './Timeline';
import presidentsOfArgentina from './data/data'

function App() {
  return (
    <Timeline data={presidentsOfArgentina} />
  );
}

export default App;
