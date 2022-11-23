import Header from './components/header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Profesionales from './pages/Profesionales';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='contacto'
          element={<Contacto />}
        />
        <Route
          path='servicios'
          element={<Servicios />}
        />
        <Route
          path='profesionales'
          element={<Profesionales />}
        />
        <Route
          path='nosotros'
          element={<Nosotros />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </>
  );
}

export default App;
