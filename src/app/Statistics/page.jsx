'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './page.css'
import lewandowski from './Image/Lewandowski.jpg'
import raphinha from './Image/Raphinha.jpg'
import olmo from './Image/Olmo.jpg'
import lamine from './Image/yamal.jpg'
import lopez from './Image/Lopez.jpg'
import pedri from './Image/pedri.jpg'
import pablo from './Image/Pablo.jpg'
import kounde from './Image/Kounde.jpg'
import eric from './Image/eric.jpg'
import dejong from './Image/DeJong.jpg'
import victor from './Image/victor.jpg'
import gavi from './Image/gavi.jpg'
import gerard from './Image/gerard.jpg'
import casado from './Image/casado.jpg'
import araujo from './Image/Araujo.jpg'
import inigo from './Image/inigo.jpg'
import balde from './Image/Balde.jpg'
import campnou from './Image/campnou.jpg'

const page = () => {
  return (
    <div>

        {/* big laptop */}
        <div id='container' className='hidden md:hidden lg:hidden xl:block'>

            <div className="container">
                <Image 
                className='background-img' 
                src={campnou} 
                alt='' />
            </div>

            <div className='head'>

                <div className='Navbar'>
                    <div className="left">
                    <Link href='/'>
                        <h1>Barcelona</h1>
                    </Link>
                    </div>

                    <div className="center">
                    <Link href='/'>
                        <p>News</p>
                    </Link>

                    <Link href='./Statistics'>
                        <p id='recent'>Statistics</p>
                    </Link>

                    <Link href='./Players'>
                        <p>Players</p>
                    </Link>

                    <Link href="./About">
                    <   p>About</p>
                    </Link>
                    
                    </div>
                    <div className="right">
                    <p>Privacy Policy</p>
                    </div>
                </div>
                    
            </div>

            <div className="statistics">
                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lewandowski} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Robert Lewandowski</h1>
                        <h3>Position : Striker</h3>
                        <p>GP : 32</p>
                        <p>⚽ : 25</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={raphinha} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Raphinha</h1>
                        <h3>Winger</h3>
                        <p>GP : 34</p>
                        <p>⚽ : 18</p>
                        <p>👟 : 9</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={raphinha} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Ferran Torres</h1>
                        <h3>Winger</h3>
                        <p>GP : 27</p>
                        <p>⚽ : 10</p>
                        <p>👟 : 6</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={olmo} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Dani Olmo</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 23</p>
                        <p>⚽ : 9</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lamine} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Lamine Yamal</h1>
                        <h3>Winger</h3>
                        <p>GP : 33</p>
                        <p>⚽ : 8</p>
                        <p>👟 : 13</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lopez} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Fermin López</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 5</p>
                        <p>👟 : 4</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={pedri} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Pedri</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 35</p>
                        <p>⚽ : 4</p>
                        <p>👟 : 5</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={pablo} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Pablo Torre</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 10</p>
                        <p>⚽ : 3</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={kounde} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Jules Koundè</h1>
                        <h3>Defender</h3>
                        <p>GP : 32</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={eric} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Eric García</h1>
                        <h3>Defender</h3>
                        <p>GP : 27</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={dejong} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Frankie De Jong</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 24</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={victor} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Pau Victor</h1>
                        <h3>Striker</h3>
                        <p>GP : 19</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={gavi} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Gavi</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 24</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={gerard} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Gerard Martín</h1>
                        <h3>Unknown</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={casado} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Marc Casadó</h1>
                        <h3>Unkown</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={araujo} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Ronald Araújo</h1>
                        <h3>Defender</h3>
                        <p>GP : 11</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={inigo} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Iñigo Martinez</h1>
                        <h3>Defender</h3>
                        <p>GP : 27</p>
                        <p>⚽ : nill</p>
                        <p>👟 : 4</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={balde} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Alejandro Balde</h1>
                        <h3>Defender</h3>
                        <p>GP : 30</p>
                        <p>⚽ : nill</p>
                        <p>👟 : 4</p>
                    </div>
                </div>
            </div>
        </div>

        {/* small laptop */}
        <div id='content' className='hidden md:hidden lg:block xl:hidden'>

            <div className="container">
                <Image
                src={campnou}
                className='background-img'
                alt=''
                // style={{objectFit:'cover', position:'fixed', zIndex:'-1'}} 
                />
            </div>

            <div className='head'>
            
                <div className='Navbar'>
                    <div className="left">
                    <Link href='/'>
                        <h1>Barcelona</h1>
                    </Link>
                    </div>

                    <div className="center">
                    <Link href='/'>
                        <p>News</p>
                    </Link>

                    <Link href='./Statistics'>
                        <p id='recent'>Statistics</p>
                    </Link>

                    <Link href='./Players'>
                        <p>Players</p>
                    </Link>

                    <Link href="./About">
                    <   p>About</p>
                    </Link>
                    
                    </div>
                    <div className="right">
                    <p>Privacy Policy</p>
                    </div>
                </div>
                    
            </div>

            <div className="statistics">
                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lewandowski} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Robert Lewandowski</h1>
                        <h3>Position : Striker</h3>
                        <p>GP : 32</p>
                        <p>⚽ : 25</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={raphinha} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Raphinha</h1>
                        <h3>Winger</h3>
                        <p>GP : 34</p>
                        <p>⚽ : 18</p>
                        <p>👟 : 9</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={raphinha} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Ferran Torres</h1>
                        <h3>Winger</h3>
                        <p>GP : 27</p>
                        <p>⚽ : 10</p>
                        <p>👟 : 6</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={olmo} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Dani Olmo</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 23</p>
                        <p>⚽ : 9</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lamine} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Lamine Yamal</h1>
                        <h3>Winger</h3>
                        <p>GP : 33</p>
                        <p>⚽ : 8</p>
                        <p>👟 : 13</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lopez} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Fermin López</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 5</p>
                        <p>👟 : 4</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={pedri} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Pedri</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 35</p>
                        <p>⚽ : 4</p>
                        <p>👟 : 5</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={pablo} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Pablo Torre</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 10</p>
                        <p>⚽ : 3</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={kounde} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Jules Koundè</h1>
                        <h3>Defender</h3>
                        <p>GP : 32</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={eric} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Eric García</h1>
                        <h3>Defender</h3>
                        <p>GP : 27</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={dejong} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Frankie De Jong</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 24</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={victor} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Pau Victor</h1>
                        <h3>Striker</h3>
                        <p>GP : 19</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={gavi} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Gavi</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 24</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={gerard} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Gerard Martín</h1>
                        <h3>Unknown</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={casado} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Marc Casadó</h1>
                        <h3>Unkown</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={araujo} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Ronald Araújo</h1>
                        <h3>Defender</h3>
                        <p>GP : 11</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={inigo} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Iñigo Martinez</h1>
                        <h3>Defender</h3>
                        <p>GP : 27</p>
                        <p>⚽ : nill</p>
                        <p>👟 : 4</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={balde} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Alejandro Balde</h1>
                        <h3>Defender</h3>
                        <p>GP : 30</p>
                        <p>⚽ : nill</p>
                        <p>👟 : 4</p>
                    </div>
                </div>
            </div>
        </div>

        {/* tablet */}
        <div id='content' className='hidden md:block lg:hidden xl:hidden'>

            <div className="container">
                <Image 
                className='background-img' 
                src={campnou} 
                alt='' />
            </div>

            <div className='head'>
            
                <div className='Navbar-tablet'>
                    <div className="left">
                    <Link href='/'>
                        <h1>Barcelona</h1>
                    </Link>
                    </div>

                    <div className="center">
                    <Link href='/'>
                        <p>News</p>
                    </Link>

                    <Link href='./Statistics'>
                        <p id='recent'>Statistics</p>
                    </Link>

                    <Link href='./Players'>
                        <p>Players</p>
                    </Link>

                    <Link href="./About">
                    <   p>About</p>
                    </Link>
                    
                    </div>
                    <div className="right">
                    <p>Privacy Policy</p>
                    </div>
                </div>
                    
            </div>

            <div className="statistics-tablet">
                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lewandowski} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Robert Lewandowski</h1>
                        <h3>Position : Striker</h3>
                        <p>GP : 32</p>
                        <p>⚽ : 25</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={raphinha} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Raphinha</h1>
                        <h3>Winger</h3>
                        <p>GP : 34</p>
                        <p>⚽ : 18</p>
                        <p>👟 : 9</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={raphinha} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Ferran Torres</h1>
                        <h3>Winger</h3>
                        <p>GP : 27</p>
                        <p>⚽ : 10</p>
                        <p>👟 : 6</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={olmo} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Dani Olmo</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 23</p>
                        <p>⚽ : 9</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lamine} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Lamine Yamal</h1>
                        <h3>Winger</h3>
                        <p>GP : 33</p>
                        <p>⚽ : 8</p>
                        <p>👟 : 13</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={lopez} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Fermin López</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 5</p>
                        <p>👟 : 4</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={pedri} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Pedri</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 35</p>
                        <p>⚽ : 4</p>
                        <p>👟 : 5</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={pablo} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Pablo Torre</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 10</p>
                        <p>⚽ : 3</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={kounde} alt='lewandowski' />
                    </div>

                    <div className="right">
                        <h1>Jules Koundè</h1>
                        <h3>Defender</h3>
                        <p>GP : 32</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={eric} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Eric García</h1>
                        <h3>Defender</h3>
                        <p>GP : 27</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={dejong} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Frankie De Jong</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 24</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 2</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={victor} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Pau Victor</h1>
                        <h3>Striker</h3>
                        <p>GP : 19</p>
                        <p>⚽ : 2</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={gavi} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Gavi</h1>
                        <h3>Midfielder</h3>
                        <p>GP : 24</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={gerard} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Gerard Martín</h1>
                        <h3>Unknown</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={casado} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Marc Casadó</h1>
                        <h3>Unkown</h3>
                        <p>GP : 26</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 3</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={araujo} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Ronald Araújo</h1>
                        <h3>Defender</h3>
                        <p>GP : 11</p>
                        <p>⚽ : 1</p>
                        <p>👟 : 1</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={inigo} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Iñigo Martinez</h1>
                        <h3>Defender</h3>
                        <p>GP : 27</p>
                        <p>⚽ : nill</p>
                        <p>👟 : 4</p>
                    </div>
                </div>

                <div className="ctn">
                    <div className="left">
                        <Image className='img' src={balde} alt='eric' />
                    </div>

                    <div className="right">
                        <h1>Alejandro Balde</h1>
                        <h3>Defender</h3>
                        <p>GP : 30</p>
                        <p>⚽ : nill</p>
                        <p>👟 : 4</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default page