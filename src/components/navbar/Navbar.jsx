import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';
import logo from '../../assets/logo-mobile.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='flex flex-wrap items-center justify-between  bg-primary px-2 py-3'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
        <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
          <img
            src={logo}
            alt='Logo CM Charlone'
            className='w-44'
          />
          <button
            className='block cursor-pointer rounded px-3 py-1 text-4xl leading-none text-white outline-none focus:outline-none lg:hidden'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <HiOutlineXMark value={{ size: '6em' }} />
            ) : (
              <HiBars3 value={{ size: '6em' }} />
            )}
          </button>
        </div>
        <div
          className={
            'flex-grow items-center lg:flex' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
            <NavLink
              className='mt-6 ml-2 flex items-center px-3 py-2 leading-snug text-white hover:opacity-75 sm:mt-0 sm:py-2'
              to='/'
            >
              Inicio
            </NavLink>
            <NavLink
              className='ml-2 flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
              to='/nosotros'
            >
              Nosotros
            </NavLink>
            <NavLink
              className='ml-2 flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
              to='/servicios'
            >
              Servicios
            </NavLink>
            <NavLink
              className='ml-2 flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
              to='/profesionales'
            >
              Profesionales
            </NavLink>
            <NavLink
              className='ml-2 flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
              to='/'
            >
              Novedades
            </NavLink>
            <NavLink
              className='ml-2 flex items-center px-3 py-2 leading-snug text-white hover:opacity-75'
              to='/contacto'
            >
              Contacto
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
