import React from 'react'
import {Container, Row, Col} from 'reactstrap'

const Services = () => {
  return (
    <>
        <section className='services'>
            <Container className='services__container'>
                <div className='heading'>
                    <h2>Services</h2>
                    <p className='text-white'>What i offer</p>
                </div>
                <Row className='services__container__row d-flex flex-wrap align-items-center justify-content-center gap-3'>
                    
                    <Col className='col col-lg-3 col-xlg-3 services__container__row__col d-flex flex-column align-items-center justify-content-center flex-wrap'>
                        <div className='services__container__row__col__content d-flex flex-column justify-content-center align-items-center flex-wrap gap-3'>
                            <i class="ri-palette-line services__container__row__col__content__icon"></i>
                            <h3 className='services__container__row__col__content__title'>Graphic Design</h3>
                            <p className='services__container__row__col__content__desc'>I'm specialize in providing <b>custom-tailored design solutions</b> for businesses of all sizes. I'm a experienced designer will work with you to create stunning visuals that effectively communicate your message.</p>

                        </div>
                    </Col>
                    <Col className='col col-lg-3 col-xlg-3 services__container__row__col d-flex flex-column align-items-center justify-content-center flex-wrap'>
                        <div className='services__container__row__col__content content1 d-flex flex-column justify-content-center align-items-center flex-wrap gap-3'>
                            <i class="ri-code-s-slash-line services__container__row__col__content__icon"></i>
                            <h3 className='services__container__row__col__content__title'>Website Development</h3>
                            <p className='services__container__row__col__content__desc'>I can help you create an <b>engaging and user-friendly</b> website that will help you reach your business goals. I offer a variety of services, from designing a custom website to creating a unique logo and branding.</p>

                        </div>
                    </Col>
                    <Col className='col col-lg-3 col-xlg-3 services__container__row__col d-flex flex-column align-items-center justify-content-center flex-wrap'>
                        <div className='services__container__row__col__content d-flex flex-column justify-content-center align-items-center flex-wrap gap-3'>
                            <i class="ri-paint-brush-line services__container__row__col__content__icon"></i>
                            <h3 className='services__container__row__col__content__title'>UI/UX Design</h3>
                            <p className='services__container__row__col__content__desc'>I offer professional UI/UX design services to <b>elevate your website's user experience</b>. With a focus on usability and aesthetics, I'll create an appealing and intuitive interface that engages and converts visitors.</p>

                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Services