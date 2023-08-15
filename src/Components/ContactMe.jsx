import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import emailjs from '@emailjs/browser';


export const ContactMe = () => {

    const sendMessage = (event)=>{
        event.preventDefault();
        
        var params = {
            from_name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            message: document.getElementById("message").value
        }

        emailjs.send("service_cs9zjpe", "template_wceq81q", params, "_3o9KT2QBxPXo8ehz");

        event.target.reset();
    }

    
  return (
    <>
        <section className='contactMe' id='contact'>
            <Container className='contactMe__container'>
                <div className='heading'>
                        <h2>Contact Me</h2>
                        <p>Get in touch</p>
                </div>
                <Row className='contactMe__container__row d-flex justify-content-center align-items-center gap-5'>
                    
                    <Col className='colcol-lg-6 contactMe__container__row__col d-flex flex-column justify-content-center align-items-start gap-4'>
                        <div className='contactMe__container__row__col__content'>
                            <h1 className='contactMe__container__row__col__content__title'>Let's Work <span>Together!</span></h1>
                            <p className='contactMe__container__row__col__content__desc'>Boost your brand’s visibility with my help, Please don’t hesitate to contact me with any questions or concerns. I’m eager to hear from you and assist in any way possible.</p>
                        </div>
                        <div className='contactMe__container__row__col__info d-flex flex-wrap align-items-start gap-3'>
                            <div className='contactMe__container__row__col__info__phone d-flex align-items-center gap-2'>
                                <i className="ri-phone-fill"></i>
                                <span className='contact-content-sub-text'>+92 (300) 396 8416</span>
                            </div>
                            <div className='contactMe__container__row__col__info__email d-flex align-items-center gap-2'>
                                <i className="ri-mail-open-fill"></i>
                                <span className='contact-content-sub-text'>aftabasim88@gmail.com</span>
                            </div>
                            <div className='contactMe__container__row__col__info__location d-flex align-items-center gap-2'>
                                <i className="ri-map-pin-2-fill"></i>
                                <span className='contact-content-sub-text'>Sargodha, Pakistan</span>
                            </div>
                        </div>
                    </Col>
                    <Col className='col contactMe__container__row__col col-lg-4'>
                        <form className='contactMe__container__row__col__form d-flex flex-column align-items-start gap-3' onSubmit={sendMessage}>
                            <div className='contactMe__container__row__col__form__inputs d-flex flex-column gap-2'>
                                <label htmlFor="name">
                                    <div className='contactMe__container__row__col__form__inputs__name'>
                                        <input type="text" placeholder='Enter your name' id='name' required />
                                    </div>
                                </label>
                                <label htmlFor="email">
                                    <div className='contactMe__container__row__col__form__inputs__email'>
                                        <input type="email" placeholder='Enter your email' id='email' required />
                                    </div>
                                </label>
                                <label htmlFor="message">
                                    <div className='contactMe__container__row__col__form__inputs__message'>
                                        <textarea name="" id="message" cols='38' rows='5' placeholder='Enter your message' required></textarea>
                                    </div>
                                </label>
                            </div>
                            <button type='submit' className='contactMe__container__row__col__form__btn d-flex align-items-center justify-content-center gap-1 btn btn-primary'><span>Send Message</span><i className="ri-arrow-right-line send-btn-icon"></i></button>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}
