
//-------Importaciones-------//

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import AhorcadoPage from './pages/AhorcadoPage';
import DevelopersPage from './pages/DevelopersPage';
import ErrorPage from './pages/ErrorPage';

//--------------------------//

/* Componente de funcion llamado "app" que atravez de un fragment devuelve varios un componentes importados. Mediante <BrowserRouter> accede a los componentes para renderizar <Header/> y <Footer/>. Mediante <Routes> se crean cuatro <Route> para navegar entre las diferentes paginas como - <MenuPage> <AhorcadoPage> <DevelopersPage> <ErrorPage> -  */
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='/Juegos' element={<AhorcadoPage />} />
          <Route path='/Desarrolladores' element={<DevelopersPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

//-------Exportacion del componente-----//

export default App;
