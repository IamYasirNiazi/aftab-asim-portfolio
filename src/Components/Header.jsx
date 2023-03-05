import React, { useEffect, useRef, useState } from 'react'
import {Container, Row, Col} from 'reactstrap'
import Logo from '../assets/images/logo.png'
import Logo3 from '../assets/images/logo3.png'
import { Link } from 'react-scroll'


const Header = (props) => {

  
  // Dark and Light Mode
  const {setMode, mode} = props;

  function lightMode(){
   setMode("light")
  }
  function darkMode(){
   setMode("dark")
   }



  // Hamburger Open and close Function.
   const toggleRef = useRef();
   const [menuOpened, setMenuOpened] = useState(false);

  let mobile = window.innerWidth<=991? true : false;
  function toggleMode(e){

    if(mobile){
      toggleRef.current.classList.toggle('toggleMenu')

      if (menuOpened===false){
        setMenuOpened(true);
      }else{
        setMenuOpened(false);
      }  
    }
  }
  


  // If someone click any link that is showed by clicking the hamburger, then clicking on the link will make the menu hide. 
  function navMenu(){
    if(mobile){
    toggleRef.current.classList.toggle('toggleMenu')
    setMenuOpened(false)
    }
  }



//  while scrolling, it makes the navbar sticky
const headerRef = useRef()
function stickyNavbar(){
  window.addEventListener('scroll', ()=>{

    if(document.body.scrollTop>30 || document.documentElement.scrollTop>30){
      headerRef.current.classList.add("stickyNav");
    }else{
      headerRef.current.classList.remove("stickyNav");
    }
  })
}



// Sticky Header and Hamburger Menu Click Outside Close Functionality
useEffect(() => {

  stickyNavbar();
  
  function handleClickOutside(event) {
      if (mobile && toggleRef.current && !toggleRef.current.contains(event.target)) {
        toggleRef.current.classList.remove('toggleMenu')
        setMenuOpened(false);
      }
    } 
    
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("scroll", handleClickOutside, true);
    
    return() => {
      window.removeEventListener('click', stickyNavbar);
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('scroll', handleClickOutside, true);
    }
  }, [toggleRef, mobile])





  return (
    <>
      <nav className='nav' ref={headerRef}>
        <Container className='nav__container'>
          <Row className='nav__container__row'>
            <Col className='col col-lg-12 nav__container__row__col'>
              <div className='nav__container__row__col__main navigate d-flex flex-wrap justify-content-center align-items-center gap-1'>

                {mode==="dark" && <img src={Logo} className='img-fluid nav__container__row__col__main__logo' alt="Logo" />}
                {mode==="light" && <img src={Logo3} className='img-fluid nav__container__row__col__main__logo' alt="Logo" />}
                <ul className='nav__container__row__col__main__navigation d-flex flex-wrap align-items-center' ref={toggleRef} onClick={toggleMode}>
                  <li><Link
                  to='hero' smooth={true} spy={true} activeClass='active' onClick={navMenu}
                  >Home</Link></li>
                  <li><Link
                  to='about' smooth={true} spy={true} onClick={navMenu}
                  >About</Link></li>
                  <li><Link
                  to='skills' smooth={true} spy={true} onClick={navMenu}
                  >Skills</Link></li>
                  <li><Link
                  to='qualification' smooth={true} spy={true} onClick={navMenu}
                  >Qualification</Link></li>
                  <li><Link
                  to='services' smooth={true} spy={true} onClick={navMenu}
                  >Services</Link></li>
                  <li><Link
                  to='portfolio' smooth={true} spy={true} onClick={navMenu}
                  >Portfolio</Link></li>
                  <li><Link
                  to='testimonial' smooth={true} spy={true} onClick={navMenu}
                  >Testimonials</Link></li>
                </ul>
                <div className='nav__container__row__col__main__contact d-flex flex-wrap justify-content-center align-items-center gap-5'>
                  {mode==='dark' &&<i className="ri-sun-fill nav__container__row__col__main__contact__icon1" onClick={lightMode}></i>}
                  {mode==='light' &&<i className="ri-moon-fill nav__container__row__col__main__contact__icon2" onClick={darkMode}></i>}
                  <Link
                  to='contact' smooth={true} spy={true}
                  ><button className='nav__container__row__col__main__contact__btn'>Contact Us</button></Link>
                  {(menuOpened===false) && <i className="ri-menu-3-fill nav__container__row__col__main__contact__hamburger-open" onClick={toggleMode}></i>}
                  {(menuOpened===true) && <i className="ri-menu-2-fill nav__container__row__col__main__contact__hamburger-close" onClick={toggleMode}></i>}
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </>
  )
}

export default Header