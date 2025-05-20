"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";
import './Homepage.css'
import Image from "next/image";
import barca from './Image/barca.jpg'
import gavi from './Image/gavi.jpg'
import stadium from './Image/stadium.jpg'
import boots from './Image/boots.jpg'
import campnou from './Image/campnou.jpg'

const Homepage = () => {

  const [show, setShow] = useState(true)
  const [hide, setHide] = useState(false)

  const handleShow = () => {
    setShow(true)
    setHide(false)

  }

  const handleHide = () => {
    setShow(true)
    setHide(!hide)

  }

  const [first, setfirst] = useState(true)
  const [second, setsecond] = useState(false)

  const handlefirst = () => {
    setfirst(!first)
    setsecond(!second)

  }

  const [appear, setAppear] = useState(true)
  const [dissapear, setDissapear] = useState(true)

  const handleDissapear = () => {
    setDissapear(!dissapear)

  }

  return(
    <div>

      {/* small laptop */}
      <div className="hidden md:hidden lg:block xl:hidden">

        <div className='head'>
        
          <div className='Navbar'>
            <div className="left">
              <Link href='/'>
                <h1>Barcelona</h1>
              </Link>
            </div>

            <div className="center">
              <Link href='/'>
                <p id='recent'>News</p>
              </Link>

              <Link href='./Statistics'>
                <p>Statistics</p>
              </Link>

              <Link href='./Players'>
                <p>Players</p>
              </Link>

              <Link href='./About'>
                <p>About</p>
              </Link>
              
            </div>
            <div className="right">
              <p>Privacy Policy</p>
            </div>
          </div>
            
        </div>

        <Image className="background-img1" src={campnou} alt="stadium"/>
      </div>

    </div>
  );
};

export default Homepage;
