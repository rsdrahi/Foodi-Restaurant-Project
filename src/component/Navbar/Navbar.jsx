import { Handbag, PhoneCall, Search } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex  justify-between items-center mt-2 shadow p-2 '> 
      <h2 className='font-bold text-3xl'>
        <span className='font-bold text-3xl bg-green-500 px-3 rounded-lg text-white'>f</span>
        OODI
      </h2>
      
      <ul className='flex gap-18 font-medium poppins-font text-black'>
        <li>Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Offers</li>
      </ul>
      <div className='flex gap-12 justify-center items-center'>
         <Search></Search>
      <Handbag></Handbag>

          <button className='flex gap-4 btn bg-[#39DB4A] text-white rounded-full m-2 justify-center items-center p-6 poppins-font' ><PhoneCall></PhoneCall>Contact</button>

     </div>
    </nav>
  );
};

export default Navbar;