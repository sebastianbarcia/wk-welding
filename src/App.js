import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Home  from './pages/Home';
import FooterNav from './components/footer/footer';
import DetailsProduct from './pages/DetailsProduct';
import { Routes,  Route , BrowserRouter} from 'react-router-dom';
import  Contact from './pages/Contact';
import Error404 from './pages/Error404';
import AboutUs from './pages/AboutUs';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <>
     <BrowserRouter>
      <header className='App'> 
        <NavBar/> 
      </header>
      <main> 
         <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path = '/us' element ={<AboutUs/>}></Route>
          <Route exact path = '/contact' element ={<Contact/>}></Route>
          <Route exact path ='*' element={<Error404/>}></Route>
          <Route exact path = '/product/:id' element={<DetailsProduct/>} ></Route>
          <Route exact path='/category/:category' element={<CategoryPage/>}></Route>
         </Routes>      
      </main>            
      <footer>
        <FooterNav/>
      </footer>  
      </BrowserRouter>   
      
       
          
    </>
  )
}

export default App;
