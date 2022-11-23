import React from 'react';
import { HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';
import { BiTimeFive } from 'react-icons/bi';

const Contact = () => {
  return (
    <div className='flex flex-wrap justify-around p-3 2xl:h-8'>
      <div className='row flex w-40'>
        <HiOutlinePhone
          size={24}
          className='mr-2 self-center text-primary '
        />
        <div>
          <p className='font-bold text-primary'>CONTACTO</p>
          <p className='text-sm text-secondary'>(11) 3619-2566</p>
        </div>
      </div>
      <div className='row flex w-40'>
        <HiOutlineMapPin
          size={24}
          className='mr-2 self-center  text-primary'
        />
        <div>
          <p className='font-bold text-primary'>DIRECCIÓN</p>
          <p className='text-sm text-secondary'>Charlone 866, SM</p>
        </div>
      </div>
      <div className='row mt-2 flex w-52 '>
        <BiTimeFive
          size={24}
          className='mr-2 self-center  text-primary'
        />
        <div>
          <p className='font-bold text-primary'>HORARIOS</p>
          <p className='text-sm text-secondary'>09:00 - 19:00 Lun a Vie</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
