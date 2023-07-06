import './App.css';
import Header from './components/Header'
import Foto from './components/Foto';
import Bio from './components/Bio';
import Info from './components/Info';

function App() {
  return (
    <div>
      <Header></Header>
      <div id='pagina'>
        <div id='fotoPerfil'>
          <Foto></Foto>
        </div>
        <div id = 'biografia'>
          <Bio></Bio>
        </div>
        <div id = 'info'>
          <Info></Info>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
