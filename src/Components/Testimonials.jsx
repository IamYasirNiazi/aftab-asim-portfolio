import React from 'react'
import './Testimonials.scss'
import {Container, Row, Col, NavLink} from 'reactstrap'
import Women_img from '../assets/images/testimonial-w.png'
import Men_img from '../assets/images/testimonial-m.png'

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
                                        <img src={Men_img} alt="" className='testimonials__container__row__col__wrapper__header__info__img img-fluid' />
                                        <div className='testimonials__container__row__col__wrapper__header__info__title d-flex flex-column align-items-start'>
                                            <h5 className='testimonials__container__row__col__wrapper__header__info__title__name'>
                                            Richardauly
                                            </h5>
                                            <span className='testimonials__container__row__col__wrapper__header__info__title__stars d-flex align-items-center'>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            </span>
                                            <p className='testimonials__container__row__col__wrapper__header__info__title__desc'>
                                                {/* Provided Next Js Website Srevice */}
                                                Australia
                                            </p>
                                        </div>
                                    </div>
                                    <div className='testimonials__container__row__col__wrapper__header__social-icon'>
                                        {/* <i class="ri-linkedin-box-fill"></i> */}
                                        {/* <i class="ri-external-link-line"></i> */}
                                        <NavLink href='https://www.fiverr.com/iamyasirniazi/design-and-develop-nextjs-reactjs-nodejs-and-mongodb-business-website?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=3r7a0m' target='_blank'><i class="ri-external-link-line"></i></NavLink>
                                    </div>
                                </div>
                                <div className='testimonials__container__row__col__wrapper__comments'>
                                    <p>
                                    I'm very impressed by iamyasirniazi, he met above my expectations. I definitely recommend.
                                    </p>
                                </div>
                            </div>
                            <div className='testimonials__container__row__col__wrapper d-flex flex-column justify-content-center'>
                                <div className='testimonials__container__row__col__wrapper__header d-flex justify-content-between align-items-start'>
                                    <div className='testimonials__container__row__col__wrapper__header__info d-flex align-items-start gap-2'>
                                        <img src={Women_img} alt="" className='testimonials__container__row__col__wrapper__header__info__img img-fluid' />
                                        <div className='testimonials__container__row__col__wrapper__header__info__title d-flex flex-column align-items-start'>
                                            <h5 className='testimonials__container__row__col__wrapper__header__info__title__name'>
                                            Pamelachen
                                            </h5>
                                            <span className='testimonials__container__row__col__wrapper__header__info__title__stars d-flex align-items-center'>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            {/* <i class="ri-star-half-line"></i> */}
                                            {/* <i class="ri-star-line"></i> */}
                                            </span>
                                            <p className='testimonials__container__row__col__wrapper__header__info__title__desc'>
                                                {/* Provided Html Css Javascript Website Service */}
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                    <div className='testimonials__container__row__col__wrapper__header__social-icon'>
                                        {/* <i class="ri-linkedin-box-fill"></i> */}
                                        {/* <i class="ri-external-link-line"></i> */}
                                        <NavLink href='https://www.fiverr.com/iamyasirniazi/design-and-develop-nextjs-reactjs-nodejs-and-mongodb-business-website?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=3r7a0m' target='_blank'><i class="ri-external-link-line"></i></NavLink>
                                    </div>
                                </div>
                                <div className='testimonials__container__row__col__wrapper__comments'>
                                    <p>
                                    Very reliable developer. I will like to work with him again.
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