import { useState } from 'react';
import Logo from '/images/logo.svg';
import Close from '/images/icon-close.svg';
import Hamburger from '/images/icon-hamburger.svg';

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <nav className='fixed w-full bg-[var(--clr-neutral-white)] z-50'>
      <div className='flex justify-between px-6 py-6 relative items-center'>
        <a href='/' className='mt-1'>
          <img className='h-full' src={Logo} alt='EasyBank logo' />
        </a>

        {/* Desktop Viewport */}
        <ul className='hidden md:flex gap-6 text-[var(--clr-neutral-blue)]'>
          <li className=''>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
          <li>
            <a href='/'>Blog</a>
          </li>
          <li>
            <a href='/'>Careers</a>
          </li>
        </ul>
        <button className='hidden md:block gradient rounded-full px-8 py-3 text-[var(--clr-neutral-white)] font-bold hover:opacity-70 transition'>
          Request Invite
        </button>

        {/* Mobile Viewport */}
        <button onClick={handleMenuClick} className='md:hidden'>
          {menu ? <img src={Close}></img> : <img src={Hamburger}></img>}
        </button>
        <ul
          className={`${
            menu ? 'visible' : 'invisible'
          }  absolute top-20 left-0 right-0 mx-auto bg-[var(--clr-neutral-white)] w-[90%] flex  flex-col items-center gap-5 py-8 md:hidden rounded-md drop-shadow-2xl`}
        >
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
          <li>
            <a href='/'>Blog</a>
          </li>
          <li>
            <a href='/'>Careers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
