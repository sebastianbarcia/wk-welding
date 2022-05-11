import './App.scss';
import NavBar from './components/NavBar/NavBar';

function App() {
  let test = "Soldadoras"
  return (
    <div>
      <header className='App'> 
        <NavBar/> 
      </header>
      <main>
      <h1>WK Welding {test}</h1>
        <p>
          Empresa dedicada a la soldadoras
        </p>      
      </main> 
      <footer>
        
      </footer>   
       
      
    </div>
  );
}

export default App;
