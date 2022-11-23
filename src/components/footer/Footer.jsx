import React from 'react';
import logo from '../../assets/Logo-principal.png';

const Footer = () => {
  return (
    <footer className='p-4 md:px-6 md:py-8'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a
          href='#'
          className='mb-4 flex items-center sm:mb-0'
        >
          <img
            src={logo}
            className='mr-3 w-24'
            alt='Flowbite Logo'
          />
        </a>
        <ul className='mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0'>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6 '
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6'
            >
              Terminos y condiciones
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mr-4 hover:underline md:mr-6 '
            >
              Profesionales
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:underline'
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
      <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        © 2022{' '}
        <a
          href='#'
          className='hover:underline'
        >
          CM Charlone
        </a>
        . Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
