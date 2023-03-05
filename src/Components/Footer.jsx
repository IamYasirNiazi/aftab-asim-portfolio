// import React from 'react'
// import {Container, Row, Col} from 'reactstrap'
// import Logo from '../assets/images/logo2.png'

// const Footer = (props) => {
//   return (
//     <>
//       <footer className='footer'>
//         <Container className='footer__container'>
//           <Row className='footer__container__row d-flex flex-wrap justify-content-center align-items-center'>
//             <Col className='col-lg-11 footer__container__row__col'>
//               <div className="footer__container__row__col__main d-flex flex-wrap justify-content-between align-items-center">
//                 <div className='footer__container__row__col__main__logo'>
//                   <img src={Logo} className='img-fluid logo' alt="Logo" />
//                 </div>
//                 <div className='footer__container__row__col__main__links d-flex flex-wrap justify-content-center align-items-center gap-4'>
//                     <span>Services</span>
//                     <span>Portfolio</span>
//                     <span>Contact Me</span>
//                 </div>
//                 <div className='footer__container__row__col__main__social d-flex flex-wrap justify-content-center align-items-center gap-3'>
//                   <i className="ri-facebook-fill"></i>
//                   <i className="ri-twitter-fill"></i>
//                   <i class="ri-instagram-line"></i>
//                   <i class="ri-linkedin-fill"></i>
//                   <i class="ri-behance-fill"></i>
//                   <i class="ri-github-fill"></i>
//                   <i class="ri-whatsapp-line"></i>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </>
//   )
// }

// export default Footer








import React from 'react'
import { Link } from 'react-scroll'
import {Container, Row, Col, NavLink} from 'reactstrap'
import Logo from '../assets/images/logo2.png'

const Footer = (props) => {
  return (
    <>
      <footer className='footer'>
        <Container className='footer__container'>
          <Row className='footer__container__row d-flex flex-wrap justify-content-center align-items-center'>
            <Col className='col-lg-11 footer__container__row__col'>
              <div className="footer__container__row__col__main d-flex flex-wrap justify-content-between align-items-center">
                <div className='footer__container__row__col__main__logo'>
                  <img src={Logo} className='img-fluid logo' alt="Logo" />
                </div>
                <div className='footer__container__row__col__main__links d-flex flex-wrap justify-content-center align-items-center gap-4'>
                    <span><Link
                  to='services' smooth={true} spy={true}
                  >Services</Link></span>
                    <span><Link
                  to='services' smooth={true} spy={true}
                  >Portfolio</Link></span>
                    <span><Link
                  to='contact' smooth={true} spy={true}
                  >Contact Me</Link></span>
                </div>
                <div className='footer__container__row__col__main__social d-flex flex-wrap justify-content-center align-items-center gap-3'>
                <NavLink href="https://web.facebook.com/IamYasirNiazi" target='_blank'><i className="ri-facebook-fill"></i></NavLink>
                  <NavLink href="https://twitter.com/IamYasirNiazi" target='_blank'><i className="ri-twitter-fill"></i></NavLink>
                  <NavLink href="https://www.instagram.com/iamyasirniazi/" target='_blank'><i class="ri-instagram-line"></i></NavLink>
                  <NavLink href="https://www.linkedin.com/in/iamyasirniazi/" target='_blank'><i class="ri-linkedin-fill"></i></NavLink>
                  <NavLink href="https://www.behance.net/iamyasirniazi" target='_blank'><i class="ri-behance-fill"></i></NavLink>
                  <NavLink href="https://github.com/IamYasirNiazi" target='_blank'><i class="ri-github-fill"></i></NavLink>
                  <NavLink href="https://wa.me/+923057388480" target='_blank'><i class="ri-whatsapp-line"></i></NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='footer__copyright'>
          <span>Copyright © 2023 | <b>Yasir Jehangir Khan</b></span>
        </div>
      </footer>
    </>
  )
}

export default Footer

