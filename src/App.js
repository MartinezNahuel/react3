import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import PokeApi from './ejemplos/PokeApi/PokeApi';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
return(
  <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemd' element={<ItemDetailContainer/> }/>
        <Route path='/nosotros' element={ <Nosotros /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
        <Route path='/pokeapi' element={<PokeApi /> }/>
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;