import { useState } from 'react';
import logo from '../assets/logo-mobile.png';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=' mb-3 flex flex-wrap items-center justify-between bg-primary px-2 py-3'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
        <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
          <img
            src={logo}
            alt='Logo CM Charlone'
            className='w-44'
          />
          <button
            className='block cursor-pointer rounded px-3 py-1 text-2xl leading-none text-white outline-none focus:outline-none lg:hidden'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <HiOutlineXMark /> : <HiBars3 />}
          </button>
        </div>
        <div
          className={
            'flex-grow items-center lg:flex' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
            <li className='nav-item'>
              <a
                className='flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
                href='#'
              >
                <span className='ml-2'>Inicio</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
                href='#'
              >
                <span className='ml-2'>Nosotros</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
                href='#'
              >
                <span className='ml-2'>Servicios</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
                href='#'
              >
                <span className='ml-2'>Profesionales</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
                href='#'
              >
                <span className='ml-2'>Novedades</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
                href='#'
              >
                <span className='ml-2'>Contacto</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
