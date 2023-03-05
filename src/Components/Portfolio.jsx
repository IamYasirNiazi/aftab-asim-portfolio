import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Portfolio_Image1 from '../assets/images/Fashion_Store_Web_Design.png'
import Portfolio_Image2 from '../assets/images/Fitness_Club_Web_Design.png'
import Portfolio_Image3 from '../assets/images/Food_Store_Web_Design.png'
import Portfolio_Image4 from '../assets/images/Furniture_Store_Web_Design.png'
import Portfolio_Image5 from '../assets/images/Ecommerce_Store_Web_Design.png'
  

const Portfolio = () => {


  return (

    <>
        <section className='portfolio'>
            <Container className='portfolio__container'>
                <div className='heading'>
                    <h2>Portfolio</h2>
                    <p>Most recent work</p>
                </div>
                <Row className='portfolio__container__row d-flex justify-content-center align-items-center gap-3'>
                    
                    <Col className='col col-lg-12 portfolio__container__row__col d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column owl-carousel owl-theme' id='slider'>
                               
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image1} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image2} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                            </div>   
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image3} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                            </div> 
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image4} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image5} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                            </div>

                        </div>                      
                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}

export default Portfolio

