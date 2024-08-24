import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-700 text-white' >
    <div className="footer-content">
    <img
              alt="logo"
              src="/HomeImg/logo1.png" //logo URL
              width="190"
              height="190"
              className="d-inline-block align-top p-0 mb-0"
            />
      <p className='p-4'>&copy; 2024 Your Company Name. All rights reserved.</p>
   
    </div>
  </footer>
  )
}

export default Footer