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
                            <h3 className='services__container__row__col__content__title'>Event Organizer</h3>
                            <p className='services__container__row__col__content__desc'>Creating unforgettable moments is my passion. As an experienced event organizer, I specialize in turning your visions into reality. From intimate gatherings to grand celebrations, I meticulously plan and execute every detail to perfection.</p>

                        </div>
                    </Col>
                    <Col className='col col-lg-3 col-xlg-3 services__container__row__col d-flex flex-column align-items-center justify-content-center flex-wrap'>
                        <div className='services__container__row__col__content content1 d-flex flex-column justify-content-center align-items-center flex-wrap gap-3'>
                            <i class="ri-code-s-slash-line services__container__row__col__content__icon"></i>
                            <h3 className='services__container__row__col__content__title'>Administrator</h3>
                            <p className='services__container__row__col__content__desc'>Streamlining healthcare excellence is my commitment. With a strong background in hospital administration, I bring a unique blend of operational expertise and compassionate leadership to ensure your medical facility runs seamlessly.</p>

                        </div>
                    </Col>
                    <Col className='col col-lg-3 col-xlg-3 services__container__row__col d-flex flex-column align-items-center justify-content-center flex-wrap'>
                        <div className='services__container__row__col__content d-flex flex-column justify-content-center align-items-center flex-wrap gap-3'>
                            <i class="ri-paint-brush-line services__container__row__col__content__icon"></i>
                            <h3 className='services__container__row__col__content__title'>Safety Officer</h3>
                            <p className='services__container__row__col__content__desc'>Championing safety at every step. As a dedicated safety officer, my mission is to safeguard lives, assets, and environments. With a keen eye for potential hazards and a proactive approach, I work to develop and implement comprehensive safety protocols. </p>

                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Services