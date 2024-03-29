import React from 'react';
import Nav from '../Component/navbar';
import Homecss from './home.module.css';
import Logo from '../image/brand_logo.svg';

function home() {
  return (
    <div>
      <Nav />
      <div className={Homecss.homesection}>
        <div className={Homecss.homesection1}>
          <div>
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p style={{ color: 'white', fontWeight: 400, fontSize: '16px' }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source
            </p>
            <p>
              <button className={Homecss.btnShop}>Shop Now</button>
              <button className={Homecss.btnShop}>Category</button>
            </p>
          </div>
        </div>
        {/* second part */}
        <div className={Homecss.homesection2}>
          <img src={Logo} alt='logo' />
        </div>
      </div>
    </div>
  );
}

export default home;
