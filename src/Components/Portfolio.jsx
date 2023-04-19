import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Portfolio_Image1 from '../assets/images/Food_Store_Web_Design.jpg'
import Portfolio_Image2 from '../assets/images/Fitness_Club_Web_Design.png'
import Portfolio_Image3 from '../assets/images/Ecommerce_Store_Web_Design.png'
import Portfolio_Image4 from '../assets/images/Fashion_Store_Web_Design.png'
import Portfolio_Image5 from '../assets/images/Furniture_Store_Web_Design.png'
import Portfolio_Image6 from '../assets/images/Truck_Web_Design.jpg'
import Portfolio_Image7 from '../assets/images/Food_Store_Web_Design.png'
import Portfolio_Image8 from '../assets/images/Section_Design_Reactjs.jpg'


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
                                <h5 className='portfolio__container__row__col__content__title text-white'>Food Store Website Frontend Design (React Js)</h5>
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image2} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>FitClub Gym Website Frontend Design (React Js)</h5>
                            </div>   
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image3} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>Ecommerce Store Frontend Design (React Js)</h5>
                            </div> 
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image4} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>Fashion Store Frontend Web Design (Html & Css)</h5>
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image5} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>Furniture Store Frontend Web Design (Html, Css & Bootstrap)</h5>
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image6} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>Logistics Frontend Website Design (React Js)</h5>
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image7} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>Food Store Frontend Web Design (Html, Css & Bootstrap)</h5>
                            </div>
                            <div className='portfolio__container__row__col__content item'>
                                <img src={Portfolio_Image8} alt="Portfolio pic" className='portfolio__container__row__col__content__img' />
                                {/* <h5 className='portfolio__container__row__col__content__title text-white'>HTML, CSS Website Design</h5> */}
                                {/* <p className='portfolio__container__row__col__content__desc text-white'>HTML, CSS Website Design</p> */}
                                <h5 className='portfolio__container__row__col__content__title text-white'>Component Design for a Website (React Js)</h5>
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

