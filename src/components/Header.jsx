import React from 'react'
import { useState } from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Header = () => {
   const [state, setstate] = useState(0);

  return (
    <>
      <div className="container1">
        <div>
          <a>
            <h2>T E S L A</h2>
          </a>
        </div>

        <div className="menu">
          <a href="">Model S</a>
          <a href="">Model S</a>
          <a href="">Model S</a>
          <a href="">Model S</a>
        </div>

        <div className="rightMenu">
          <a href="">Shop</a>
          <a href="">Tesla Account</a>
          <MenuIcon style={{ cursor: "pointer" }} onClick={()=>{setstate(1)}}/>
        </div>

        <div className="burgerMenu"  style ={{ transform : state === 0 ? "translateX(100%)" : "translateX(0%)" }} >
          <div className="cancel" onClick={()=>{setstate(0)}}>
            <ClearIcon/>
          </div>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
        </div>

      </div>

    </>
  )
}

export default Header
