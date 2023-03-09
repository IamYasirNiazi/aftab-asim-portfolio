import React from 'react'
import {Container, Row, Col, NavLink} from 'reactstrap'
import certificate_Image1 from '../assets/images/Coursera_JavaScript_Programming.jpg'
import certificate_Image2 from '../assets/images/Coursera_Frontend_Development.jpg'
import certificate_Image3 from '../assets/images/PITB_Creative_Desin.jpg'


const Certificates = () => {
  return (
    <>
        <section className='certificates'>
            <Container className='certificates__container'>
                <div className='heading'>
                    <h2>Certificates</h2>
                    <p>What i learned</p>
                </div>
                <Row className='certificates__container__row d-flex justify-content-center align-items-center gap-3'>
                    
                    <Col className='col col-lg-12 certificates__container__row__col d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column owl-carousel owl-theme' id='certificate'>

                            <NavLink href='https://coursera.org/share/b47e030d0db8273f9bff0e78d1be6f28' target='_blank'>   
                            <div className='certificates__container__row__col__content item'>
                                <img src={certificate_Image1} alt="certificates pic" className='certificates__container__row__col__content__img' />
                                <h5 className='certificates__container__row__col__content__title text-white'>Programming with JavaScript (Coursera)</h5>
                            </div>
                            </NavLink>

                            <NavLink href='https://coursera.org/share/7af7d67f4e86d739678bfc27996cfd7d' target='_blank'>
                                <div className='certificates__container__row__col__content item'>
                                    <img src={certificate_Image2} alt="certificates pic" className='certificates__container__row__col__content__img' />
                                    <h5 className='certificates__container__row__col__content__title text-white'>Intro to Frontend Development (Coursera)</h5>
                                </div>
                            </NavLink>

                            <NavLink href='https://www.erozgaar.pitb.gov.pk/' target='_blank'>
                                <div className='certificates__container__row__col__content item'>
                                    <img src={certificate_Image3} alt="certificates pic" className='certificates__container__row__col__content__img' />
                                    <h5 className='certificates__container__row__col__content__title text-white'>Creative Design Course (PITB)</h5>
                                </div>
                            </NavLink>

                        </div>                      
                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}

export default Certificates