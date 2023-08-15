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
                        <h3  className='about__container__row__col1__title p-1'>Administrator and Event Organizer</h3>
                        <p  className='about__container__row__col1__desc p-1'>I am proud to serve as a hospital administrator, overseeing the seamless operation of our medical facility to ensure the highest quality care for our patients.<br/><br/>
In addition to my role in healthcare, I embrace my passion for event organization, where I bring moments to life and create unforgettable experiences. Balancing the precision of healthcare administration with the creativity of event coordination allows me to bring a unique perspective to both fields.</p>
                        <NavLink href='/Aftab_Asim_CV.pdf' className='about__container__row__col1__btn btn-download btn btn-primary d-flex justify-content-center align-items-center' target='_blank' download>My Resume &nbsp;<i class="ri-download-2-fill"></i></NavLink>
                    </Col>

                    <Col className='about__container__row__col2 col col-lg-4 col-xlg-4 d-flex flex-column align-items-start gap-5'>
                        <div className='about__container__row__col2__qurey d-flex flex-column align-items-start gap-1'>
                            <h1 className='about__container__row__col2__query__heading'>
                                Any Type Of Query & Discussion.
                            </h1>
                            <p className='about__container__row__col2__query__tagline'>Let's talk with me</p>
                        </div>
                        <div className='about__container__row__col2__email d-flex justify-content-between align-items-center gap-5'>
                            <NavLink href='mailto:aftabasim88@gmail.com' className='about__container__row__col2__email__id'>aftabasim88@gmail.com</NavLink>
                            <span><NavLink href='mailto:aftabasim88@gmail.com' className='about__container__row__col2__email__icon'><i class="ri-arrow-right-line"></i></NavLink></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
