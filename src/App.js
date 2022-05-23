import './App.scss';
import NavBar from './components/NavBar/NavBar';
import CardContainer from './components/CardContainer/CardContainer';
import FooterNav from './components/footer/Footer';

function App() {
  return (
    <>
      <header className='App'> 
        <NavBar/> 
      </header>
      <main>      
           <div>   
            <CardContainer/>
          </div>
      </main> 
      <footer>
        <FooterNav/>
      </footer>         
    </>
  );
}

export default App;
