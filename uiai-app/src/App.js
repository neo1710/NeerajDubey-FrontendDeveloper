import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Nav';
import { Land } from './components/Land';
import { Feat } from './components/Feat';
import { Ai } from './components/Ai';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Land/>
     <Feat/>
     <Ai/>
    </div>
  );
}

export default App;
