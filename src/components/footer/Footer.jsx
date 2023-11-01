import React from 'react';

const Footer = () => {
  return (
    <footer className={`bg-[#373744] text-white p-4 flex items-center h-36 pt-16`}>
      <div className="container mx-auto text-center">
      <p>&copy; 2023 LocationFinder</p>
        <p><a href="/locationmap">Aracım Nerede? </a> | 
        <a href="/contact"> Araçlar </a>
        | <a href="/contact"> Araçlar </a>
        | <a href="/contact"> İletişim </a>
        
        </p>
      </div>
    </footer>
  );
};

export default Footer;