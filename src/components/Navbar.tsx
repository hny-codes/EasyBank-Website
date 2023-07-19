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
    <nav>
      <div className='flex justify-between px-6 py-6 relative items-center'>
        <a href='/' className='mt-1'>
          <img className='h-full' src={Logo} alt='EasyBank logo' />
        </a>

        {/* Desktop Viewport */}
        <ul className='hidden sm:flex gap-6'>
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
        <button className='hidden sm:block'>Request Invite</button>

        {/* Mobile Viewport */}
        <button onClick={handleMenuClick} className='sm:hidden'>
          {menu ? <img src={Close} ></img> : <img src={Hamburger}></img>}
        </button>
        <ul
          className={`${
            menu ? 'visible' : 'invisible'
          }  absolute top-20 left-0 right-0 mx-auto bg-slate-500 w-[90%] flex  flex-col items-center gap-4 py-6 sm:hidden rounded-md`}
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
