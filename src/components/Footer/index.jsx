import React, { useContext, useEffect, useState } from 'react';
import Context from '../../Context/Themes';
import './index.css';

export default function Footer() {
  const { Themes, darkMode } = useContext(Context);
  const [year, setYear] = useState();
  useEffect(() => {
    const yearTime = new Date();
    setYear(yearTime.getFullYear());
  }, []);
  return (
    <footer
      className='text-center flex items-center sm:justify-end justify-center py-12 w-full relative'
      style={{ overflow: 'hidden' }}
    >
      <div className='flex items-center z-[1]'>
        <h5 className='font-normal text-xs' style={{ color: Themes.text }}>
          Echo con 💙 por Adrian Diaz | {year}
        </h5>
        <div className='w-[50px] h-[50px] ml-1 logoFooter rounded-full'>
          <img
            src={
              darkMode
                ? 'https://res.cloudinary.com/dynscts1t/image/upload/v1683826109/Logo_Adrian.svg'
                : 'https://res.cloudinary.com/dynscts1t/image/upload/v1683853632/Logo_Adrian_Black.svg'
            }
            alt='logo portfolio'
            loading='lazy'
            className=' h-2/4 object-cover'
          />
        </div>
      </div>
    </footer>
  );
}
