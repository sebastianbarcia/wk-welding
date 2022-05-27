import './App.scss';
import NavBar from './components/NavBar/NavBar';
import CardContainer from './components/CardContainer/CardContainer';
import FooterNav from './components/footer/footer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <>
      <header className='App'> 
        <NavBar/> 
      </header>
      {/* <main>      
           <div>   
            <CardContainer/>
          </div>
      </main>  */}
       <ItemDetailContainer/>   
      <footer>
        <FooterNav/>
      </footer>  
      
       
          
    </>
  )
}

export default App;
