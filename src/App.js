import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import PokeApi from './ejemplos/PokeApi/PokeApi';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {


  return (
    <CartContext.Provider>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='*' element={<Navigate to={"/"} />} />
          <Route path='/pokeapi' element={<PokeApi />} />
        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;