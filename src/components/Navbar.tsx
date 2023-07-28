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
      <div className='flex justify-between px-6 py-6 relative items-center max-w-7xl mx-auto'>
        <a href='/' className='mt-1'>
          <img className='h-full' src={Logo} alt='EasyBank logo' />
        </a>

        {/* Desktop Viewport */}
        <ul className='hidden md:flex gap-6 text-[var(--clr-neutral-blue)]'>
          <li className='relative group hover:text-[var(--clr-primary-blue)] transition'>
            <a href='/' className='py-8'>
              Home
            </a>
            <div className='w-full h-1 absolute gradient -bottom-8 opacity-0 group-hover:opacity-100 transition'></div>
          </li>
          <li className='relative group hover:text-[var(--clr-primary-blue)] transition'>
            <a href='/' className='py-8'>
              About
            </a>
            <div className='w-full h-1 absolute gradient -bottom-8 opacity-0 group-hover:opacity-100 transition'></div>
          </li>
          <li className='relative group hover:text-[var(--clr-primary-blue)] transition'>
            <a href='/' className='py-8'>
              Contact
            </a>
            <div className='w-full h-1 absolute gradient -bottom-8 opacity-0 group-hover:opacity-100 transition'></div>
          </li>
          <li className='relative group hover:text-[var(--clr-primary-blue)] transition'>
            <a href='/' className='py-8'>
              Blog
            </a>
            <div className='w-full h-1 absolute gradient -bottom-8 opacity-0 group-hover:opacity-100 transition'></div>
          </li>
          <li className='relative group hover:text-[var(--clr-primary-blue)] transition'>
            <a href='/' className='py-8'>
              Careers
            </a>
            <div className='w-full h-1 absolute gradient -bottom-8 opacity-0 group-hover:opacity-100 transition'></div>
          </li>
        </ul>
        <button className='hidden md:block gradient rounded-full px-8 py-3 text-[var(--clr-neutral-white)] font-bold hover:opacity-70 transition'>
          Request Invite
        </button>

        {/* Mobile Viewport */}
        <button onClick={handleMenuClick} className='md:hidden'>
          {menu ? <img src={Close}></img> : <img src={Hamburger}></img>}
        </button>
        <div
          className={`${
            menu ? 'visible' : 'invisible'
          } absolute top-[4.5rem] left-0 right-0 bg-gradient-to-b from-gray-900 to-white/20 md:hidden h-[90vh]`}
        >
          <ul
            className={`${
              menu ? 'opacity-100' : 'opacity-0 translate-y-10'
            } transition top-5   relative  mx-auto bg-[var(--clr-neutral-white)] w-[90%] flex flex-col items-center gap-5 py-8 md:hidden rounded-md`}
          >
            <li className='relative group'>
              <a href='/' className='py-1'>
                Home
              </a>
              <div className='w-full h-1 absolute gradient -bottom-2 opacity-0 group-hover:opacity-100 transition'></div>
            </li>
            <li className='relative group'>
              <a href='/' className='py-1'>
                About
              </a>
              <div className='w-full h-1 absolute gradient -bottom-2 opacity-0 group-hover:opacity-100 transition'></div>
            </li>
            <li className='relative group'>
              <a href='/' className='py-1'>
                Contact
              </a>
              <div className='w-full h-1 absolute gradient -bottom-2 opacity-0 group-hover:opacity-100 transition'></div>
            </li>
            <li className='relative group'>
              <a href='/' className='py-1'>
                Blog
              </a>
              <div className='w-full h-1 absolute gradient -bottom-2 opacity-0 group-hover:opacity-100 transition'></div>
            </li>
            <li className='relative group'>
              <a href='/' className='py-1'>
                Careers
              </a>
              <div className='w-full h-1 absolute gradient -bottom-2 opacity-0 group-hover:opacity-100 transition'></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
