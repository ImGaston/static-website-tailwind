import { useState } from 'react';
import logo from '../assets/logo-mobile.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex items-center justify-between bg-primary p-4'>
      <img
        src={logo}
        alt='Logo CM Charlone'
        className='w-44'
      />
      <nav>
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line
                  x1='18'
                  y1='6'
                  x2='6'
                  y2='18'
                />
                <line
                  x1='6'
                  y1='6'
                  x2='18'
                  y2='18'
                />
              </svg>
            </div>
            <ul className='flex min-h-[250px] flex-col items-center justify-between'>
              <li className='my-4 border-b border-gray-400 uppercase'>
                <a href='/about'>Inicio</a>
              </li>
              <li className='my-4 border-b border-gray-400 uppercase'>
                <a href='/portfolio'>Nosotros</a>
              </li>
              <li className='my-4 border-b border-gray-400 uppercase'>
                <a href='/contact'>Servicios</a>
              </li>
              <li className='my-4 border-b border-gray-400 uppercase'>
                <a href='/contact'>Profesionales</a>
              </li>
              <li className='my-4 border-b border-gray-400 uppercase'>
                <a href='/contact'>Novedades</a>
              </li>
              <li className='my-4 border-b border-gray-400 uppercase'>
                <a href='/contact'>Contacto</a>
              </li>
            </ul>
          </div>
        </section>
        {/* <ol className='ml-4 pb-2'>
          <li className='text-white'>Inicio</li>
          <li className='text-white'>Nosotros</li>
          <li className='text-white'>Servicios</li>
          <li className='text-white'>Profesionales</li>
          <li className='text-white'>Novedades</li>
          <li className='text-white'>Contacto</li>
          <li className='text-white'>TURNOS</li>
        </ol> */}
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Navbar;
