import React from 'react'
import {Container, Row, Col, NavLink} from 'reactstrap'

export const About = () => {
  return (
    <>
        <section className='about'>
            <Container className='about__container'>
                <div className='heading'>
                    <h2>About Me</h2>
                    <p>My introduction</p>
                </div>
                <Row className='about__container__row d-flex flex-wrap justify-content-center gap-5'>
                    <Col className='about__container__row__col1 col col-lg-5 col-xlg-4 d-flex flex-column align-items-start gap-2'>
                        {/* <p className='about__container__row__col1__tagline'>About Me &nbsp; ----------</p> */}
                        <h3  className='about__container__row__col1__title p-1'>Web and Graphics Expert!</h3>
                        <p  className='about__container__row__col1__desc p-1'>A Professional Frontend Developer and Graphic Designer. I'm a Software Engr graduate with 3 years of experience in Web and Graphics. I am passionate and find freelancing as the opportunity to express my creativity by creating responsive & playful websites and graphics. My Expertise are HTML5, CSS3, Bootstrap, JavaScript, React Js, Next Js, Redux, Sass, Adobe Photoshop and Illustrator.</p>
                        <NavLink href='/Yasir_Resume.pdf' className='about__container__row__col1__btn btn-download btn btn-primary d-flex justify-content-center align-items-center' target='_blank' download>My Resume &nbsp;<i class="ri-download-2-fill"></i></NavLink>
                    </Col>

                    <Col className='about__container__row__col2 col col-lg-4 col-xlg-4 d-flex flex-column align-items-start gap-5'>
                        <div className='about__container__row__col2__qurey d-flex flex-column align-items-start gap-1'>
                            <h1 className='about__container__row__col2__query__heading'>
                                Any Type Of Query & Discussion.
                            </h1>
                            <p className='about__container__row__col2__query__tagline'>Let's talk with me</p>
                        </div>
                        <div className='about__container__row__col2__email d-flex justify-content-between align-items-center gap-5'>
                            <NavLink href='mailto:iamyasirniazi@gmail.com' className='about__container__row__col2__email__id'>iamyasirniazi@gmail.com</NavLink>
                            <span><NavLink href='mailto:iamyasirniazi@gmail.com' className='about__container__row__col2__email__icon'><i class="ri-arrow-right-line"></i></NavLink></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
