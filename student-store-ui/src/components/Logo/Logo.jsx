import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/"> 
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" style={{ width: '70px', height: '70px' }} />
      </Link>
    </div>
  );
};

export default Logo;