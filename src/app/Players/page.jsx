import React from 'react'
import Link from 'next/link'
import './page.css'
import Image from 'next/image'
import lewandowski from './Image/lewandowski.png'
import campnou from './Image/campnou.jpg'
import szczesny from './Image/szczesny.png'
import terstegen from './Image/terstegen.png'
import christensen from './Image/christensen.png'
import olmo from './Image/olmo.png'
import inaki from './Image/inaki.jpg'
import dejong from './Image/dejong.png'
import torres from './Image/torres.png'
import inigo from './Image/inigo.png'
import kounde from './Image/kounde.png'
import raphinha from './Image/raphinha.png'
import garcia from './Image/garcia.png'
import araujo from './Image/araujo.png'
import fati from './Image/fati.png'
import pedri from './Image/pedri.png'
import balde from './Image/balde.png'
import victor from './Image/victor.jpg'
import gerard from './Image/gerard.jpg'
import gavi from './Image/gavi.png'
import fermin from './Image/fermin.jpg'
import fort from './Image/fort.jpg'
import brazil from './Image/26.png'
import finland from './Image/39.png'
import france from './Image/50.png'
import netherland from './Image/122.png'
import poland from './Image/135.png'
import uruguay from './Image/179.png'
import germany from './Image/40.png'
import spain from './Image/157.png'

const page = () => {
  return (
    <div>
        
        {/* laptop */}
        <div className='hidden md:hidden lg:block xl:block'>

          <div id='container'>

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
                    <h1>SoccerHub</h1>
                  </Link>
                </div>

                <div className="center">
                  <Link href='/'>
                    <p>News</p>
                  </Link>

                  <Link href='./Statistics'>
                    <p>Statistics</p>
                  </Link>

                  <Link href='./Players'>
                    <p id='recent'>Players</p>
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

            <div className="box">
              <div className="players">

                <div className="name">
                  <h1>Name</h1>

                  <span>
                    <Image className='img' src={lewandowski} alt='' />
                    <p>Robert Lewandowski #9</p>
                  </span>

                  <span>
                    <Image className='img' src={szczesny} alt='' />
                    <p>Wojciech Szczesny #25</p>
                  </span>

                  <span>
                    <Image className='img' src={terstegen} alt='' />
                    <p>Marc-Andre Ter Stegen #1</p>
                  </span>

                  <span>
                    <Image className='img' src={inigo} alt='' />
                    <p>Inigo Martinez #5</p>
                  </span>

                  <span>
                    <Image className='img' src={christensen} alt='' />
                    <p>Andreas Christensen #15</p>
                  </span>

                  <span>
                    <Image className='img' src={olmo} alt='' />
                    <p>Dani Olmo #20</p>
                  </span>

                  <span>
                    <Image className='img' src={inaki} alt='' />
                    <p>Inaki Pena #13</p>
                  </span>

                  <span>
                    <Image className='img' src={dejong} alt='' />
                    <p>Frenkie De Jong #21</p>
                  </span>

                  <span>
                    <Image className='img' src={torres} alt='' />
                    <p>Ferran Torres #7</p>
                  </span>

                  <span>
                    <Image className='img' src={kounde} alt='' />
                    <p>Jules Kounde #23</p>
                  </span>

                  <span>
                    <Image className='img' src={raphinha} alt='' />
                    <p>Raphinha #11</p>
                  </span>

                  <span>
                    <Image className='img' src={garcia} alt='' />
                    <p>Eric Garcia #24</p>
                  </span>

                  <span>
                    <Image className='img' src={araujo} alt='' />
                    <p>Araujo #4</p>
                  </span>

                  <span>
                    <Image className='img' src={fati} alt='' />
                    <p>Ansu Fati #10</p>
                  </span>

                  <span>
                    <Image className='img' src={pedri} alt='' />
                    <p>Pedri #8</p>
                  </span>

                  <span>
                    <Image className='img' src={balde} alt='' />
                    <p>Balde #3</p>
                  </span>

                  <span>
                    <Image className='img' src={victor} alt='' />
                    <p>Pau Victor #18</p>
                  </span>

                  <span>
                    <Image className='img' src={gerard} alt='' />
                    <p>Gerard Martin #35</p>
                  </span>

                  <span>
                    <Image className='img' src={gavi} alt='' />
                    <p>Gavi #6</p>
                  </span>

                  <span>
                    <Image className='img' src={fermin} alt='' />
                    <p>Fermin Lopez #16</p>
                  </span>

                  <span>
                    <Image className='img' src={fort} alt='' />
                    <p>Hector Fort #32</p>
                  </span>
                  
                </div>

                <div className="age">
                  <h1>Age</h1>
                  <p>37</p>
                  <p>35</p>
                  <p>33</p>
                  <p>34</p>
                  <p>29</p>
                  <p>27</p>
                  <p>26</p>
                  <p>28</p>
                  <p>25</p>
                  <p>26</p>
                  <p>28</p>
                  <p>24</p>
                  <p>26</p>
                  <p>22</p>
                  <p>22</p>
                  <p>21</p>
                  <p>24</p>
                  <p>23</p>
                  <p>20</p>
                  <p>22</p>
                  <p>20</p>
                </div>

                <div className="position">
                  <h1>Position</h1>
                  <p>Striker</p>
                  <p>GoalKeeper</p>
                  <p>GoalKeeper</p>
                  <p>Defender</p>
                  <p>Defender</p>
                  <p>Midfielder</p>
                  <p>GoalKeeper</p>
                  <p>Midfielder</p>
                  <p>Striker</p>
                  <p>Defender</p>
                  <p>Winger</p>
                  <p>Defender</p>
                  <p>Defender</p>
                  <p>Striker</p>
                  <p>Midfielder</p>
                  <p>Defender</p>
                  <p>Striker</p>
                  <p>Defender</p>
                  <p>Midfielder</p>
                  <p>Midfielder</p>
                  <p>Defender</p>
                </div>

                <div className="nationality">

                  <h1>Nationality</h1>

                  <p>Poland</p>

                  <p>Poland</p>

                  <p>Germany</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>
                  
                  <p>Netherland</p>

                  <p>Spain</p>

                  <p>France</p>

                  <p>Brazil</p>

                  <p>Spain</p>

                  <p>Uruguay</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                </div>

                <div className="height">
                  <h1>Height(ft)</h1>
                  <p>6'0"</p>
                  <p>6'4"</p>
                  <p>6'1"</p>
                  <p>5'11"</p>
                  <p>6'3"</p>
                  <p>5'10"</p>
                  <p>6'0"</p>
                  <p>5'11"</p>
                  <p>6'0"</p>
                  <p>5'10"</p>
                  <p>5'9"</p>
                  <p>5'11"</p>
                  <p>6'0"</p>
                  <p>5'10"</p>
                  <p>5'8"</p>
                  <p>5'8"</p>
                  <p>6'0"</p>
                  <p>6'1"</p>
                  <p>5'8"</p>
                  <p>5'9"</p>
                  <p>6'1"</p>
                </div>

                <div className="weight">
                  <h1>Weight(kg)</h1>
                  <p>81</p>
                  <p>84</p>
                  <p>85</p>
                  <p>76</p>
                  <p>82</p>
                  <p>72</p>
                  <p>78</p>
                  <p>74</p>
                  <p>77</p>
                  <p>70</p>
                  <p>68</p>
                  <p>76</p>
                  <p>79</p>
                  <p>66</p>
                  <p>60</p>
                  <p>69</p>
                  <p>79</p>
                  <p>76</p>
                  <p>70</p>
                  <p>71</p>
                  <p>78</p>
                </div>

                <div className="market-value">
                  <h1>Market Value(€)</h1>
                  <p>€15.00m</p>
                  <p>€1.00m</p>
                  <p>€15.00m</p>
                  <p>€5.00</p>
                  <p>€15.00m</p>
                  <p>€60.00</p>
                  <p>€10.00m</p>
                  <p>€45.00m</p>
                  <p>€28.00m</p>
                  <p>€60.00</p>
                  <p>€80.00</p>
                  <p>€15.00m</p>
                  <p>€50.00m</p>
                  <p>€5.00</p>
                  <p>€120.00m</p>
                  <p>€60.00m</p>
                  <p>€5.00m</p>
                  <p>€7.50m</p>
                  <p>€70.00m</p>
                  <p>€50.00m</p>
                  <p>€10.00m</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* tablet */}
        <div className='hidden md:block lg:hidden xl:hidden'>

          <div id='container-tablet'>

            <div className="container">
                <Image 
                className='background-img' 
                src={campnou} 
                alt='' />
            </div>

            <div className='head-tablet'>
        
              <div className='Navbar-tablet'>
                <div className="left">
                  <Link href='/'>
                    <h1>SoccerHub</h1>
                  </Link>
                </div>

                <div className="center">
                  <Link href='/'>
                    <p>News</p>
                  </Link>

                  <Link href='./Statistics'>
                    <p>Statistics</p>
                  </Link>

                  <Link href='./Players'>
                    <p id='recent'>Players</p>
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

            <div className="box-tablet">
              <div className="players">

                <div className="name">
                  <h1>Name</h1>

                  <span>
                    <Image className='img' src={lewandowski} alt='' />
                    <div className='position'>
                      <p>Robert Lewandowski #9</p>
                      <p style={{color:'gray'}}>Striker</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={szczesny} alt='' />
                    <div className='position'>
                      <p>Wojciech Szczesny #25</p>
                      <p style={{color:'gray'}}>Goalkeeper</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={terstegen} alt='' />
                    <div className='position'>
                      <p>Marc-Andre Ter Stegen</p>
                      <p style={{color:'gray'}}>Goalkeeper</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={inigo} alt='' />
                    <div className='position'>
                      <p>Inigo Martinez #5</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={christensen} alt='' />
                    <div className='position'>
                      <p>Andreas Christensen #15</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={olmo} alt='' />
                    <div className='position'>
                      <p>Dani Olmo #20</p>
                      <p style={{color:'gray'}}>Midfielder</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={inaki} alt='' />
                    <div className='position'>
                      <p>Inaki Pena #13</p>
                      <p style={{color:'gray'}}>GoalKeeper</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={dejong} alt='' />
                    <div className='position'>
                      <p>Frenkie De Jong #21</p>
                      <p style={{color:'gray'}}>Midfielder</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={torres} alt='' />
                    <div className='position'>
                      <p>Ferran Torres #7</p>
                      <p style={{color:'gray'}}>Striker</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={kounde} alt='' />
                    <div className='position'>
                      <p>Jules Kounde #23</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={raphinha} alt='' />
                    <div className='position'>
                      <p>Raphinha #11</p>
                      <p style={{color:'gray'}}>Winger</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={garcia} alt='' />
                    <div className='position'>
                      <p>Eric Garcia #24</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={araujo} alt='' />
                    <div className='position'>
                      <p>Araujo #4</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={fati} alt='' />
                    <div className='position'>
                      <p>Ansu Fati #10</p>
                      <p style={{color:'gray'}}>Winger</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={pedri} alt='' />
                    <div className='position'>
                      <p>Pedri #8</p>
                      <p style={{color:'gray'}}>Midfielder</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={balde} alt='' />
                    <div className='position'>
                      <p>Balde #3</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={victor} alt='' />
                    <div className='position'>
                      <p>Pau Victor #18</p>
                      <p style={{color:'gray'}}>Striker</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={gerard} alt='' />
                    <div className='position'>
                      <p>Gerard Martin #35</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={gavi} alt='' />
                    <div className='position'>
                      <p>Gavi #6</p>
                      <p style={{color:'gray'}}>Midfielder</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={fermin} alt='' />
                    <div className='position'>
                      <p>Fermin Lopez #16</p>
                      <p style={{color:'gray'}}>Winger</p>
                    </div>
                  </span>

                  <span>
                    <Image className='img' src={fort} alt='' />
                    <div className='position'>
                      <p>Hector Fort #32</p>
                      <p style={{color:'gray'}}>Defender</p>
                    </div>
                  </span>
                  
                </div>

                <div className="age">
                  <h1>Age</h1>
                  <p>37</p>
                  <p>35</p>
                  <p>33</p>
                  <p>34</p>
                  <p>29</p>
                  <p>27</p>
                  <p>26</p>
                  <p>28</p>
                  <p>25</p>
                  <p>26</p>
                  <p>28</p>
                  <p>24</p>
                  <p>26</p>
                  <p>22</p>
                  <p>22</p>
                  <p>21</p>
                  <p>24</p>
                  <p>23</p>
                  <p>20</p>
                  <p>22</p>
                  <p>20</p>
                </div>

                <div className="nationality">

                  <h1>Nationality</h1>

                  <p>Poland</p>

                  <p>Poland</p>

                  <p>Germany</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>
                  
                  <p>Netherland</p>

                  <p>Spain</p>

                  <p>France</p>

                  <p>Brazil</p>

                  <p>Spain</p>

                  <p>Uruguay</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                  <p>Spain</p>

                </div>

                <div className="height">
                  <h1>Height(ft)</h1>
                  <p>6'0"</p>
                  <p>6'4"</p>
                  <p>6'1"</p>
                  <p>5'11"</p>
                  <p>6'3"</p>
                  <p>5'10"</p>
                  <p>6'0"</p>
                  <p>5'11"</p>
                  <p>6'0"</p>
                  <p>5'10"</p>
                  <p>5'9"</p>
                  <p>5'11"</p>
                  <p>6'0"</p>
                  <p>5'10"</p>
                  <p>5'8"</p>
                  <p>5'8"</p>
                  <p>6'0"</p>
                  <p>6'1"</p>
                  <p>5'8"</p>
                  <p>5'9"</p>
                  <p>6'1"</p>
                </div>

                <div className="weight">
                  <h1>Weight(kg)</h1>
                  <p>81</p>
                  <p>84</p>
                  <p>85</p>
                  <p>76</p>
                  <p>82</p>
                  <p>72</p>
                  <p>78</p>
                  <p>74</p>
                  <p>77</p>
                  <p>70</p>
                  <p>68</p>
                  <p>76</p>
                  <p>79</p>
                  <p>66</p>
                  <p>60</p>
                  <p>69</p>
                  <p>79</p>
                  <p>76</p>
                  <p>70</p>
                  <p>71</p>
                  <p>78</p>
                </div>

                <div className="market-value">
                  <h1>Market Value(€)</h1>
                  <p>€15.00m</p>
                  <p>€1.00m</p>
                  <p>€15.00m</p>
                  <p>€5.00</p>
                  <p>€15.00m</p>
                  <p>€60.00</p>
                  <p>€10.00m</p>
                  <p>€45.00m</p>
                  <p>€28.00m</p>
                  <p>€60.00</p>
                  <p>€80.00</p>
                  <p>€15.00m</p>
                  <p>€50.00m</p>
                  <p>€5.00</p>
                  <p>€120.00m</p>
                  <p>€60.00m</p>
                  <p>€5.00m</p>
                  <p>€7.50m</p>
                  <p>€70.00m</p>
                  <p>€50.00m</p>
                  <p>€10.00m</p>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default page