
//-------Importaciones-------//

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
<<<<<<< HEAD
import ArkanoidF from './pages/arkanoidFarfan/ArkanoidFarfan';
=======
import ArkanoidRojas from './pages/Arkanoidrojas';
>>>>>>> main

//--------------------------//

/* Componente de funcion llamado "app" que atravez de un fragment devuelve varios un componentes importados. Mediante <BrowserRouter> accede a los componentes para renderizar <Header/> y <Footer/>. Mediante <Routes> se crean cuatro <Route> para navegar entre las diferentes paginas como - <MenuPage> <AhorcadoPage> <DevelopersPage> <ErrorPage> -  */
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MenuPage></MenuPage>} />
          <Route path='/ArkanoidF' element={<ArkanoidF></ArkanoidF>} />
          <Route path='/Juegos' />
          <Route path='/Rojas' element={<ArkanoidRojas></ArkanoidRojas>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//-------Exportacion del componente-----//

export default App;
