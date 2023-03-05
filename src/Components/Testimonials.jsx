import React from 'react'
import './Testimonials.scss'
import {Container, Row, Col} from 'reactstrap'
import Testimonial_img1 from '../assets/images/testimonial1.png'

const Testimonials = () => {
  return (
    <>
        <section className="testimonials" id='testimonial'>
            <Container className='testimonials__container'>
                <div className="heading">
                    <h2>Testimonials</h2>
                    <p>Here's what my clients saying</p>
                </div>
                <Row className='testimonials__container__row d-flex justify-content-center align-items-center gap-1'>
                    
                    <Col className='testimonials__container__row__col col-lg-12 d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column owl-carousel owl-theme' id='testimonials'>
                            <div className='testimonials__container__row__col__wrapper d-flex flex-column justify-content-center'>
                                <div className='testimonials__container__row__col__wrapper__header d-flex justify-content-between align-items-start'>
                                    <div className='testimonials__container__row__col__wrapper__header__info d-flex align-items-start gap-2'>
                                        <img src={Testimonial_img1} alt="" className='testimonials__container__row__col__wrapper__header__info__img img-fluid' />
                                        <div className='testimonials__container__row__col__wrapper__header__info__title d-flex flex-column align-items-start'>
                                            <h5 className='testimonials__container__row__col__wrapper__header__info__title__name'>
                                                Debbie Baca
                                            </h5>
                                            <span className='testimonials__container__row__col__wrapper__header__info__title__stars d-flex align-items-center'>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            </span>
                                            <p className='testimonials__container__row__col__wrapper__header__info__title__desc'>
                                                Graphic Design Service
                                            </p>
                                        </div>
                                    </div>
                                    <div className='testimonials__container__row__col__wrapper__header__social-icon'>
                                        <i class="ri-linkedin-box-fill"></i>
                                    </div>
                                </div>
                                <div className='testimonials__container__row__col__wrapper__comments'>
                                    <p>
                                    If you are looking for a logo designer, you should hire Yasir. He did a great job on short notice.
                                    </p>
                                </div>
                            </div>
                            <div className='testimonials__container__row__col__wrapper d-flex flex-column justify-content-center'>
                                <div className='testimonials__container__row__col__wrapper__header d-flex justify-content-between align-items-start'>
                                    <div className='testimonials__container__row__col__wrapper__header__info d-flex align-items-start gap-2'>
                                        <img src={Testimonial_img1} alt="" className='testimonials__container__row__col__wrapper__header__info__img img-fluid' />
                                        <div className='testimonials__container__row__col__wrapper__header__info__title d-flex flex-column align-items-start'>
                                            <h5 className='testimonials__container__row__col__wrapper__header__info__title__name'>
                                                Nathan Jones
                                            </h5>
                                            <span className='testimonials__container__row__col__wrapper__header__info__title__stars d-flex align-items-center'>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-line"></i>
                                            <i class="ri-star-line"></i>
                                            </span>
                                            <p className='testimonials__container__row__col__wrapper__header__info__title__desc'>
                                                Graphic Design Service
                                            </p>
                                        </div>
                                    </div>
                                    <div className='testimonials__container__row__col__wrapper__header__social-icon'>
                                        <i class="ri-linkedin-box-fill"></i>
                                    </div>
                                </div>
                                <div className='testimonials__container__row__col__wrapper__comments'>
                                    <p>
                                    I appropriate the attention to details and the creative eye used to make my designs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    </>
  )
}

export default Testimonials