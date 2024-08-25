import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-700 text-white py-4'>
      <div className="flex flex-col items-center justify-center">
        <img
          alt="logo"
          src="src/components/graphics/logo.png" // Adjust the path if needed
          width="90"
          height="90"
          className="mb-4"
        />
        <p className='text-center'>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
