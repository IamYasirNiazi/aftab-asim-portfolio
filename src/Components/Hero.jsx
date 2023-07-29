// import React from 'react'
// import {Container, Row, Col} from 'reactstrap'
// import Hero_img from '../assets/images/hero-img.png'
// import Circle_shape from '../assets/images/circle.png'
// import Reactangle_shape from '../assets/images/rectangle.png'


// const Hero = (props) => {

//   return (
//     <>
//         <div className='hero d-flex justify-content-center align-items-end'>
//             <Container className='hero__container'>
//                 <Row className='hero__container__row d-flex flex-wrap justify-content-center align-items-end gap-3'>
//                     <Col className='hero__container__row__col1 col-lg-1 d-flex justify-content-start align-items-center pb-4 gap-3'>
//                         <span><i class="ri-instagram-line"></i></span>
//                         <span><i class="ri-linkedin-fill"></i></span>
//                         <span><i class="ri-behance-fill"></i></span>
//                         <span><i class="ri-github-fill"></i></span>
//                         <span><i class="ri-whatsapp-line"></i></span>
//                     </Col>
//                     <Col className='hero__container__row__col2 col-lg-6 d-flex justify-content-end'>
//                         <img src={Hero_img} className='img-fluid hero__container__row__col2__hero-img' alt="hero-img" />
//                         <h1 className='hero__container__row__col2__heading'>Yasir<br/>Jehangir</h1>
//                         <img src={Reactangle_shape} className='img-fluid hero__container__row__col2__rectangle' alt="hero-img" />
//                         <img src={Circle_shape} className='img-fluid hero__container__row__col2__circle' alt="hero-img" />
//                     </Col>
//                     <Col className='hero__container__row__col3 col-lg-3 d-flex justify-content-start pb-4'>
//                         <div className='hero__container__row__col3__main d-flex flex-column gap-3'>
//                             <p className='hero__container__row__col3__main__tagline'>Software Engineer &nbsp; ----------</p>
//                             <h2 className='hero__container__row__col3__main__title'>Based in Pakistan, I'm developer and graphic designer.</h2>
//                             <p className='hero__container__row__col3__main__desc'>Web developer & graphic designer, with<br />extensive knowledge and years of experience working in technologies like Next Js, React Js, Redux, Adobe Photoshop and Adobe Illustrator, delivering the quality work.</p>
//                             <div className='hero__container__row__col3__main__contact d-flex flex-column gap-1'>
//                                 <span className='hero__container__row__col3__main__contact__phone'>
//                                     <i class="ri-phone-fill"></i> &nbsp; +92 (305) 738 8480 </span>
//                                 <span className='hero__container__row__col3__main__contact__email'>
//                                     <i class="ri-mail-open-fill"></i> &nbsp; iamyasirniazi@gmail.com</span>
//                             </div>

//                         </div>
                        
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     </>
//   )

// }

// export default Hero












import React from 'react'
import {Container, Row, Col, NavLink} from 'reactstrap'
import Hero_img from '../assets/images/hero-img.png'
import Circle_shape from '../assets/images/circle.png'
import Reactangle_shape from '../assets/images/rectangle.png'
import Typed from "react-typed"
import {motion} from 'framer-motion'


const Hero = (props) => {

    // For transition
    const transition = { type: 'spring', duration: '3' }

    // For mobile
    // const mobile = window.innerWidth <= 768? true : false;

  return (
    <>
        <div className='hero d-flex justify-content-center align-items-end' id='hero'>
            <Container className='hero__container'>
                <Row className='hero__container__row d-flex flex-wrap justify-content-center align-items-end gap-3'>
                    <Col className='hero__container__row__col1 col col-lg-1 d-flex justify-content-start align-items-center pb-4 gap-3'>
                        <span><NavLink href="https://www.instagram.com/iamyasirniazi/" target='_blank'><i class="ri-instagram-line"></i></NavLink></span>
                        <span><NavLink href="https://www.linkedin.com/in/iamyasirniazi/" target='_blank'><i class="ri-linkedin-fill"></i></NavLink></span>
                        <span><NavLink href="https://www.behance.net/iamyasirniazi" target='_blank'><i class="ri-behance-fill"></i></NavLink></span>
                        <span><NavLink href="https://github.com/IamYasirNiazi" target='_blank'><i class="ri-github-fill"></i></NavLink></span>
                        {/* <span><NavLink href="https://wa.me/+923057388480" target='_blank'><i class="ri-whatsapp-line"></i></NavLink></span> */}
                    </Col>
                    <Col className='hero__container__row__col2 col col-lg-6 col-xl-6 d-flex justify-content-end'>
                        <img src={Hero_img} className='img-fluid hero__container__row__col2__hero-img' alt="hero-img" />
                        <motion.h1
                        initial={{x: -15, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        exit={{x: +100, opacity: 0}}
                        transition={{...transition, duration: '3'}}
                        className='hero__container__row__col2__heading'>Aftab<br/>Asim</motion.h1>
                        <motion.img
                initial={{x: +15, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                exit={{x: -100, opacity: 0}}
                transition={{...transition, duration: '3'}} src={Reactangle_shape} className='img-fluid hero__container__row__col2__rectangle' alt="hero-img" />
                        <motion.img
                initial={{x: +15, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                exit={{x: -100, opacity: 0}}
                transition={{...transition, duration: '5'}} src={Circle_shape} className='img-fluid hero__container__row__col2__circle' alt="hero-img" />
                    </Col>
                    <Col className='hero__container__row__col3 col col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-start pb-4'>
                        <motion.div
                        initial={{x: window.innerWidth>880? +15 : "", opacity: 1}}
                        whileInView={{x: window.innerWidth>880? 0 : "", opacity: 1}}
                        exit={{x: window.innerWidth>880? -100 : "", opacity: 1}}
                        transition={{...transition, duration: '3'}}
                        className='hero__container__row__col3__main d-flex flex-column gap-3'>
                            <p className='hero__container__row__col3__main__tagline'>Adminstrator</p>
                            {/* <h2 className='hero__container__row__col3__main__title'>Based in Pakistan, I'm developer and graphic designer.</h2>
                             */}
                            <h2 className='hero__container__row__col3__main__title'>
                            Top-Notch<br className='line'/> <span className='expert'>Expertise</span><br className='line'/> as a Freelance<br/><Typed
                            strings={[
                                "Adminstrator.",
                                "Safety Officer.",
                                "Event Organizer.",
                            ]}
                            typeSpeed={80}
                            backSpeed={20}
                            loop/>
                            </h2>
                            <p className='hero__container__row__col3__main__desc'>Web developer & graphic designer, with <span><br /></span>extensive knowledge and years of experience working in technologies like Next Js, React Js, Redux, Adobe Photoshop and Adobe Illustrator, delivering the quality work.</p>
                            <div className='hero__container__row__col3__main__contact d-flex flex-column gap-1'>
                                <span className='hero__container__row__col3__main__contact__phone'>
                                    <i class="ri-phone-fill"></i> &nbsp; +92 (300) 396 8416
                                </span>
                                <span className='hero__container__row__col3__main__contact__email'>
                                    <i class="ri-mail-open-fill"></i> &nbsp; aftabasim88@gmail.com
                                </span>
                            </div>

                        </motion.div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )

}

export default Hero

