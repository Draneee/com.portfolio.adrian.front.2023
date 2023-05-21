import React, { useContext, useRef, useState } from 'react';
import {
  RiMoonLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiGithubLine,
} from 'react-icons/ri';
import { IoLogoInstagram, IoIosArrowDown } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { navLink } from '../../data/nav';
import { FiSun } from 'react-icons/fi';
import Context from '../../Context/Themes';
import './index.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { Themes, setDarkMode, darkMode } = useContext(Context);
  const handleDarkMode = () => setDarkMode(!darkMode);
  const [isShow, setShow] = useState(false);
  const refElementNav = useRef();
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };
  const handleShowMenu = (e) => {
    e.preventDefault();
    setShow(!isShow);
  };

  const handleMouseEnter = (e) => {
    refElementNav.current.style = `left: ${e.target.offsetLeft}px; width: ${e.target.offsetWidth}px; opacity: 1;`;
  };
  const handleMouseLeave = (e) => {
    refElementNav.current.style = 'opacity: 0;';
  };

  const data = [
    {
      icon: <RiLinkedinLine />,
      link: 'https://www.linkedin.com/in/adrian-avila-diaz/',
    },
    {
      icon: <RiWhatsappLine />,
      link: 'https://www.linkedin.com/in/adrian-avila-diaz/',
    },
    {
      icon: <RiGithubLine />,
      link: '',
    },
  ];
  return (
    <>
      <header className='h-24 z-10 fixed left-0 top-0 lg:px-28 px-7  w-full'>
        <div className='flex justify-between items-center w-full h-[100%]'>
          <div>
            <a
              href='/'
              className='w-10 h-10 p-1  rounded-full relative logoPortfolio block'
              style={{
                // border: `1px solid ${Themes.borderNav}`,
                backdropFilter: 'blur(15px)',
              }}
            >
              <div className='w-full h-full rounded-full'>
                <img
                  src={
                    darkMode
                      ? 'https://res.cloudinary.com/dynscts1t/image/upload/v1683826109/Logo_Adrian.svg'
                      : 'https://res.cloudinary.com/dynscts1t/image/upload/v1683853632/Logo_Adrian_Black.svg'
                  }
                  alt='logo portfolio'
                  className='w-full h-full object-cover'
                />
              </div>
            </a>
          </div>
          <div>
            <nav
              className={`md:flex navBar text-sm py-[5px] relative font-semibold px-6 ${
                isShow ? 'flex' : 'hidden'
              }`}
              style={{
                border: `1px solid ${Themes.borderNav}`,
                backdropFilter: 'blur(15px)',
                color: Themes.navColor,
              }}
            >
              <div className='absolute right-7 top-6 btnOpenMenu'>
                <button onClick={handleShowMenu} className='text-xl'>
                  <MdClose />
                </button>
              </div>
              <div className='titleMenu'>
                <h5 className='text-base'>Menu</h5>
              </div>

              {navLink.map(({ label, href }, inx) => (
                <a
                  href={href}
                  className='px-3 nav__links'
                  style={{ color: Themes.text }}
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={handleMouseLeave}
                  key={inx}
                >
                  {label}
                </a>
              ))}
              <div className='animation start-home' ref={refElementNav} />
            </nav>
            <div
              className={`w-full h-[100vh] md:hidden backgroundMenu ${
                isShow ? 'absolute' : 'hidden'
              } top-0 left-0`}
              onClick={handleShowMenu}
            />
          </div>
          <div className='flex items-center'>
            {data.map((item) => (
              <a
                key={item.index}
                href={item.link}
                target='_blank'
                className='text-[20px] mx-1 rounded-full p-[6px]'
                style={{
                  border: `1px solid ${Themes.borderNav}`,
                  color: Themes.text,
                  backdropFilter: 'blur(15px)',
                }}
                rel='noreferrer'
              >
                {item.icon}
              </a>
            ))}

            <button
              className='text-[20px] mx-1 rounded-full p-[6px]'
              style={{
                border: `1px solid ${Themes.borderNav}`,
                color: Themes.text,
                backdropFilter: 'blur(15px)',
              }}
              onClick={() => handleDarkMode()}
            >
              {darkMode ? <FiSun /> : <RiMoonLine />}
            </button>
            <button
              className='text-[20px] ml-1 rounded-full p-[6px]'
              style={{
                // border: `1px solid ${Themes.borderNav}`,
                color: Themes.text,
                // backdropFilter: 'blur(15px)',
              }}
              onClick={toggleLanguage}
            >
              {i18n.language === 'es' ? (
                <svg
                  className='switch_lenguage'
                  width='23'
                  height='17'
                  viewBox='0 0 23 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.0566 2.0526C21.6265 1.31285 20.8353 0.810364 19.9187 0.810364H11.2306V2.0526H22.0566ZM0.0601807 13.2327H22.401V14.475H0.0601807V13.2327ZM11.2306 8.26378H22.401V9.50602H11.2306V8.26378ZM11.2306 5.77931H22.401V7.02154H11.2306V5.77931ZM0.0601807 10.7483H22.401V11.9905H0.0601807V10.7483ZM2.5425 16.9594H19.9187C20.8353 16.9594 21.6265 16.4569 22.0566 15.7172H0.404602C0.834664 16.4569 1.6259 16.9594 2.5425 16.9594ZM11.2306 3.29484H22.401V4.53707H11.2306V3.29484Z'
                    fill='#B22334'
                  />
                  <path
                    d='M0.10238 14.8966C0.11293 14.9544 0.124721 15.0121 0.138994 15.0687C0.155129 15.1314 0.174988 15.1917 0.196088 15.2525C0.251319 15.4134 0.318342 15.5687 0.40274 15.714L0.404602 15.7171H22.0566L22.0579 15.7146C22.1416 15.5699 22.2087 15.4146 22.2639 15.2544C22.285 15.1929 22.3055 15.1314 22.3216 15.0674C22.3359 15.0115 22.3477 14.9544 22.3582 14.8966C22.3837 14.76 22.401 14.6196 22.401 14.4749H0.0601807C0.0601807 14.6196 0.0775569 14.7594 0.10238 14.8966ZM0.0601807 11.9904H22.401V13.2326H0.0601807V11.9904ZM0.0601807 9.50594V10.7482H22.401V9.50594H11.2306H0.0601807ZM11.2306 7.02146H22.401V8.2637H11.2306V7.02146ZM11.2306 4.53699H22.401V5.77923H11.2306V4.53699ZM0.0601807 3.29476C0.0601807 3.15004 0.078798 3.01091 0.10238 2.87302C0.0775569 3.01028 0.0601807 3.15004 0.0601807 3.29476ZM0.139615 2.70097C0.155129 2.63761 0.17685 2.57737 0.196708 2.5165C0.175608 2.57737 0.15575 2.63824 0.139615 2.70097ZM11.2306 3.29476H22.401C22.401 3.15004 22.3837 3.00966 22.3582 2.8724C22.3477 2.81525 22.3365 2.75811 22.3216 2.70221C22.3048 2.63823 22.285 2.57612 22.2633 2.51463C22.208 2.35438 22.141 2.19973 22.0572 2.05501C22.0579 2.05438 22.0572 2.05314 22.0566 2.05252H11.2306V3.29476Z'
                    fill='#EEEEEE'
                  />
                  <path
                    d='M11.2306 0.810364H2.5425C1.17164 0.810364 0.0601807 1.92279 0.0601807 3.29484V9.50602H11.2306V0.810364Z'
                    fill='#3C3B6E'
                  />
                  <path
                    d='M1.302 2.50345L1.68552 2.78233L1.53906 3.23265L1.92196 2.95438L2.30548 3.23264L2.15902 2.78233L2.54254 2.50345H2.06842L1.92196 2.05252L1.77612 2.50345H1.302ZM2.54316 3.74569L2.92668 4.02457L2.78022 4.47488L3.16312 4.19662L3.54664 4.47488L3.40018 4.02457L3.7837 3.74569H3.30958L3.16312 3.29476L3.01728 3.74569H2.54316ZM5.02548 3.74569L5.409 4.02457L5.26254 4.47488L5.64544 4.19662L6.02895 4.47488L5.8825 4.02457L6.26602 3.74569H5.79189L5.64544 3.29476L5.4996 3.74569H5.02548ZM7.50779 3.74569L7.89131 4.02457L7.74486 4.47488L8.12775 4.19662L8.51127 4.47488L8.36481 4.02457L8.74833 3.74569H8.27421L8.12775 3.29476L7.98192 3.74569H7.50779ZM2.54316 6.23016L2.92668 6.50904L2.78022 6.95935L3.16312 6.68109L3.54664 6.95935L3.40018 6.50904L3.7837 6.23016H3.30958L3.16312 5.77923L3.01728 6.23016H2.54316ZM5.02548 6.23016L5.409 6.50904L5.26254 6.95935L5.64544 6.68109L6.02895 6.95935L5.8825 6.50904L6.26602 6.23016H5.79189L5.64544 5.77923L5.4996 6.23016H5.02548ZM7.50779 6.23016L7.89131 6.50904L7.74486 6.95935L8.12775 6.68109L8.51127 6.95935L8.36481 6.50904L8.74833 6.23016H8.27421L8.12775 5.77923L7.98192 6.23016H7.50779ZM3.78432 2.50345L4.16784 2.78233L4.02138 3.23265L4.40428 2.95438L4.7878 3.23264L4.64134 2.78233L5.02486 2.50345H4.55073L4.40428 2.05252L4.25844 2.50345H3.78432ZM6.26664 2.50345L6.65015 2.78233L6.5037 3.23265L6.88659 2.95438L7.27011 3.23265L7.12366 2.78233L7.50717 2.50345H7.03305L6.88659 2.05252L6.74076 2.50345H6.26664ZM8.74895 2.50345L9.13247 2.78233L8.98601 3.23265L9.36891 2.95438L9.75243 3.23265L9.60597 2.78233L9.98949 2.50345H9.51537L9.36891 2.05252L9.22308 2.50345H8.74895ZM1.302 4.98792L1.68552 5.26681L1.53906 5.71712L1.92196 5.43886L2.30548 5.71712L2.15902 5.26681L2.54254 4.98792H2.06842L1.92196 4.53699L1.77612 4.98792H1.302ZM4.02138 5.71712L4.40428 5.43886L4.7878 5.71712L4.64134 5.26681L5.02486 4.98792H4.55073L4.40428 4.53699L4.25844 4.98792H3.78432L4.16784 5.26681L4.02138 5.71712ZM6.26664 4.98792L6.65015 5.26681L6.5037 5.71712L6.88659 5.43886L7.27011 5.71712L7.12366 5.26681L7.50717 4.98792H7.03305L6.88659 4.53699L6.74076 4.98792H6.26664ZM8.74895 4.98792L9.13247 5.26681L8.98601 5.71712L9.36891 5.43886L9.75243 5.71712L9.60597 5.26681L9.98949 4.98792H9.51537L9.36891 4.53699L9.22308 4.98792H8.74895ZM1.302 7.4724L1.68552 7.75128L1.53906 8.20159L1.92196 7.92333L2.30548 8.20159L2.15902 7.75128L2.54254 7.4724H2.06842L1.92196 7.02146L1.77612 7.4724H1.302ZM4.02138 8.20159L4.40428 7.92333L4.7878 8.20159L4.64134 7.75128L5.02486 7.4724H4.55073L4.40428 7.02146L4.25844 7.4724H3.78432L4.16784 7.75128L4.02138 8.20159ZM6.26664 7.4724L6.65015 7.75128L6.5037 8.20159L6.88659 7.92333L7.27011 8.20159L7.12366 7.75128L7.50717 7.4724H7.03305L6.88659 7.02146L6.74076 7.4724H6.26664ZM8.74895 7.4724L9.13247 7.75128L8.98601 8.20159L9.36891 7.92333L9.75243 8.20159L9.60597 7.75128L9.98949 7.4724H9.51537L9.36891 7.02146L9.22308 7.4724H8.74895Z'
                    fill='white'
                  />
                </svg>
              ) : (
                <svg
                  className='switch_lenguage'
                  width='23'
                  height='17'
                  viewBox='0 0 23 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.9187 0.706787H2.5425C1.17164 0.706787 0.0601807 1.81921 0.0601807 3.19126V8.78132H22.401V3.19126C22.401 1.81921 21.2896 0.706787 19.9187 0.706787Z'
                    fill='#FBD116'
                  />
                  <path
                    d='M0.0601807 8.78131H22.401V13.1291H0.0601807V8.78131Z'
                    fill='#22408C'
                  />
                  <path
                    d='M0.0601807 14.3714C0.0601807 15.7434 1.17164 16.8558 2.5425 16.8558H19.9187C21.2896 16.8558 22.401 15.7434 22.401 14.3714V13.1291H0.0601807V14.3714Z'
                    fill='#CE2028'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
