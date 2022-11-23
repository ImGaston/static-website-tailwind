import heroImages from '../../assets/hero-image.jpg';
//TODO: blurear la imagen para que se lean el Hero

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[url("https://res.cloudinary.com/deui2hzsp/image/upload/v1669231405/cm-charlone/hero-image_nwylp7.jpg")] bg-cover pt-6 sm:h-96 sm:items-start sm:pl-28'>
      <h3 className='text-xs font-bold uppercase text-secondary sm:text-base'>
        Cuidandonos
      </h3>
      <div className=' w-44 sm:w-2/3'>
        <h1 className=' text-center text-lg font-bold text-primary sm:text-left sm:text-5xl'>
          Conoce una mejor forma de atención
        </h1>
      </div>
      <button className='pointer my-4 rounded-3xl bg-secondarydark py-2 px-6 text-sm text-white'>
        Profesionales
      </button>
    </div>
  );
};

export default Hero;
