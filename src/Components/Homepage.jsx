"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useState} from "react";
import './Homepage.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from "next/image";
import barca from './Image/barca.jpg'
import gavi from './Image/gavi.jpg'
import stadium from './Image/stadium.jpg'
import boots from './Image/boots.jpg'
import campnou from './Image/campnou.jpg'
import champions from './Image/champions.jpg'
import hansi from './Image/hansiflick.jpg'
import fcb_v_il from './Image/fcb-v-vil.jpg'

const Homepage = () => {

  useEffect(() => {
    Aos.init({duration:'1000'});

  }, [])

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
      <div className="hidden md:hidden lg:block xl:block">

        <div className='head'>
        
          <div className='Navbar'>
            <div className="left">
              <Link href='/'>
                <h1>SoccerHub</h1>
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
              <p>Contact Us</p>
            </div>
          </div>
            
        </div>

        <Image className="background-img1" src={campnou} alt="stadium"/>

        <div className="news">

          <div className="left" data-aos="fade-right">
            <Image className="img" src={champions} alt="" />

            <p>FC Barcelona are the 2025/2026 LaLiga Champions</p>
          </div>

          <div className="center" data-aos="fade-down">
            <Image className="img" src={hansi} alt="" />

            <p>Hansi Flick Ready To Face More Action With Barcelona</p>
          </div>

          <div className="right" data-aos="fade-left">
            <Image className="img" src={fcb_v_il} alt="" />

            <p>FC Barcelona VS Villareal, Full time at Camp Nou!!!</p>
          </div>

        </div>

        <div className="news">

          <div className="left" data-aos="fade-right">
            <Image className="img" src={champions} alt="" />

            <p>FC Barcelona are the 2025/2026 LaLiga Champions</p>
          </div>

          <div className="center" data-aos="fade-down">
            <Image className="img" src={hansi} alt="" />

            <p>Hansi Flick Ready To Face More Action With Barcelona</p>
          </div>

          <div className="right" data-aos="fade-left">
            <Image className="img" src={fcb_v_il} alt="" />

            <p>FC Barcelona VS Villareal, Full time at Camp Nou!!!</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Homepage;
