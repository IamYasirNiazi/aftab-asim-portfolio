import React, { useRef, useState } from 'react'
import {Container, Row, Col} from 'reactstrap'

const Skills = () => {

    const frontend = useRef();
    const graphic = useRef();
    const [fArrow, setFArrow] = useState(false)
    const [gArrow, setGArrow] = useState(false)

    function frontendToggle(){
        frontend.current.classList.toggle('skills-toggle')

        if(fArrow===false){
            setFArrow(true)
        }else{
            setFArrow(false)
        }
    }

    function graphicToggle(){
        graphic.current.classList.toggle('skills-toggle')

        if(gArrow===false){
            setGArrow(true)
        }else{
            setGArrow(false)
        }
    }

  return (
    <>
        <section className='skills'>
            <Container className='skills__container'>
                <div className='heading'>
                    <h2>Skills</h2>
                    <p>My technical level</p>
                </div>
                <Row className='skills__container__row d-flex align-items-start justify-content-center flex-wrap gap-0'>

                    <Col className='col col-lg-5 col-xlg-4 skills__container__row__col d-flex flex-column flex-wrap' id='col1'>
                {/* <Accordion> */}
                    {/* <Accordion.Item> */}
                    {/* <Accordion.Header> */}
                        <div className="skills__container__row__col__header d-flex justify-content-between align-items-center" onClick={frontendToggle}>
                            <span className='d-flex align-items-center gap-4'>
                                <span className='skills__container__row__col__header__icon'><i class="ri-braces-fill"></i></span>
                                <div className='skills__container__row__col__header__title'>
                                    <h4>Administrator</h4>
                                    <p>More than 10 years</p>
                                </div>
                            </span>
                            {!fArrow && <i class="ri-arrow-down-s-line skills__container__row__col__header__arrow"></i>}
                            {fArrow && <i class="ri-arrow-up-s-line skills__container__row__col__header__arrow"></i>}

                            
                        </div>
                        {/* </Accordion.Header> */}
                        {/* <Accordion.Body> */}
                        <div className="skills__container__row__col__content d-none" ref={frontend}>

                            <div className='skills__container__row__col__content__one'>
                                <div className='skills__container__row__col__content__one__desc'>
                                    <span className='skills__container__row__col__content__one__desc__name'>Administrator</span>
                                    <span className='skills__container__row__col__content__one__desc__perc'>90%</span>
                                </div>
                                <div className='skills__container__row__col__content__one__line'>
                                    <div className='skills__container__row__col__content__one__line__fill'></div>
                                    <div className='skills__container__row__col__content__one__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__two'>
                                <div className='skills__container__row__col__content__two__desc'>
                                    <span className='skills__container__row__col__content__two__desc__name'>Safety Officer</span>
                                    <span className='skills__container__row__col__content__two__desc__perc'>80%</span>
                                </div>
                                <div className='skills__container__row__col__content__two__line'>
                                    <div className='skills__container__row__col__content__two__line__fill'></div>
                                    <div className='skills__container__row__col__content__two__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__three'>
                                <div className='skills__container__row__col__content__three__desc'>
                                    <span className='skills__container__row__col__content__three__desc__name'>Hospital Maintenance</span>
                                    <span className='skills__container__row__col__content__three__desc__perc'>60%</span>
                                </div>
                                <div className='skills__container__row__col__content__three__line'>
                                    <div className='skills__container__row__col__content__three__line__fill'></div>
                                    <div className='skills__container__row__col__content__three__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__four'>
                                <div className='skills__container__row__col__content__four__desc'>
                                    <span className='skills__container__row__col__content__four__desc__name'>Stock Inventory</span>
                                    <span className='skills__container__row__col__content__four__desc__perc'>80%</span>
                                </div>
                                <div className='skills__container__row__col__content__four__line'>
                                    <div className='skills__container__row__col__content__four__line__fill'></div>
                                    <div className='skills__container__row__col__content__four__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__five'>
                                <div className='skills__container__row__col__content__five__desc'>
                                    <span className='skills__container__row__col__content__five__desc__name'>Pay-List</span>
                                    <span className='skills__container__row__col__content__five__desc__perc'>70%</span>
                                </div>
                                <div className='skills__container__row__col__content__five__line'>
                                    <div className='skills__container__row__col__content__five__line__fill'></div>
                                    <div className='skills__container__row__col__content__five__line__blank'></div>
                                </div>
                            </div>

                        </div>
                        {/* </Accordion.Body> */}
                        {/* </Accordion.Item> */}
                        {/* </Accordion> */}
                    </Col>

                    <Col className='col col-lg-5 col-xlg-4 skills__container__row__col d-flex flex-column flex-wrap'>
                        <div className="skills__container__row__col__header d-flex justify-content-between align-items-center" onClick={graphicToggle}>
                            <span className='d-flex align-items-center gap-4'>
                                <span className='skills__container__row__col__header__icon'><i class="ri-palette-fill"></i></span>
                                <div className='skills__container__row__col__header__title'>
                                    <h4>Event Organizer</h4>
                                    <p>More than 8 years</p>
                                </div>
                            </span>
                            {!gArrow && <i class="ri-arrow-down-s-line skills__container__row__col__header__arrow"></i>}
                            {gArrow && <i class="ri-arrow-up-s-line skills__container__row__col__header__arrow"></i>}
                        </div>

                        <div className="skills__container__row__col__content d-none" ref={graphic}>

                            <div className='skills__container__row__col__content__one'>
                                <div className='skills__container__row__col__content__one__desc'>
                                    <span className='skills__container__row__col__content__one__desc__name'>Seminars</span>
                                    <span className='skills__container__row__col__content__one__desc__perc'>80%</span>
                                </div>
                                <div className='skills__container__row__col__content__one__line'>
                                    <div className='skills__container__row__col__content__one__line__fill1'></div>
                                    <div className='skills__container__row__col__content__one__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__two'>
                                <div className='skills__container__row__col__content__two__desc'>
                                    <span className='skills__container__row__col__content__two__desc__name'>Wedding Events</span>
                                    <span className='skills__container__row__col__content__two__desc__perc'>70%</span>
                                </div>
                                <div className='skills__container__row__col__content__two__line'>
                                    <div className='skills__container__row__col__content__two__line__fill2'></div>
                                    <div className='skills__container__row__col__content__two__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__three'>
                                <div className='skills__container__row__col__content__three__desc'>
                                    <span className='skills__container__row__col__content__three__desc__name'>Musical Nights</span>
                                    <span className='skills__container__row__col__content__three__desc__perc'>70%</span>
                                </div>
                                <div className='skills__container__row__col__content__three__line'>
                                    <div className='skills__container__row__col__content__three__line__fill3'></div>
                                    <div className='skills__container__row__col__content__three__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__four'>
                                <div className='skills__container__row__col__content__four__desc'>
                                    <span className='skills__container__row__col__content__four__desc__name'>TV Shows</span>
                                    <span className='skills__container__row__col__content__four__desc__perc'>60%</span>
                                </div>
                                <div className='skills__container__row__col__content__four__line'>
                                    <div className='skills__container__row__col__content__four__line__fill4'></div>
                                    <div className='skills__container__row__col__content__four__line__blank'></div>
                                </div>
                            </div>
                            <div className='skills__container__row__col__content__five'>
                                <div className='skills__container__row__col__content__five__desc'>
                                    <span className='skills__container__row__col__content__five__desc__name'>TV Commercials</span>
                                    <span className='skills__container__row__col__content__five__desc__perc'>70%</span>
                                </div>
                                <div className='skills__container__row__col__content__five__line'>
                                    <div className='skills__container__row__col__content__five__line__fill5'></div>
                                    <div className='skills__container__row__col__content__five__line__blank'></div>
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

export default Skills