import './App.css';
import Discordpop from './components/Discordpop';
import Feature from './components/Feature';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Discordpop />
      <Navbar />
      <Landing />
      <Feature />
    </div>
  );
}

export default App;
