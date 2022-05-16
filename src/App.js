import './App.scss';
import NavBar from './components/NavBar/NavBar';
import CardSecuency from './components/carditemlist/carditems';
import FooterNav from './components/footer/footer';

function App() {
  return (
    <>
      <header className='App'> 
        <NavBar/> 
      </header>
      <main>      
           <div>   
              <CardSecuency titleSubSection="Productos recomendados"/>
              <CardSecuency titleSubSection="Productos más vendidos"/>
          </div>
      </main> 
      <footer>
        <FooterNav/>
      </footer>         
    </>
  );
}

export default App;
