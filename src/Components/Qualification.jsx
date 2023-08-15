import React from 'react'
import {Container, Row, Col} from 'reactstrap'

const Qualification = () => {


    function work(){
        document.getElementById('work').classList.add("display");
        document.getElementById('work').classList.remove("hide");
        document.getElementById('education').classList.remove("display");
        document.getElementById('education').classList.add("hide");
    }

    function education(){
        document.getElementById('education').classList.add("display");
        document.getElementById('education').classList.remove("hide");
        document.getElementById('work').classList.remove("display");
        document.getElementById('work').classList.add("hide");
    }
    

  return (
    <>
        <section className='qualification'>
            <Container className='qualification__container'>
                <div className='heading'>
                    <h2>Qualification</h2>
                    <p>My personal journey</p>
                </div>
                <Row className='qualification__container__row d-flex align-items-center justify-content-center'>
                    <div className='qualification__container__row__category d-flex align-items-center justify-content-center gap-5'>
                        <span className='d-flex align-items-start justify-content-center gap-3' onClick={work}>
                            <i class="ri-briefcase-fill"></i>
                            <h3>Work</h3>
                        </span>
                        <span className='d-flex align-items-start justify-content-center gap-3' onClick={education}>
                            <i class="ri-booklet-fill"></i>
                            <h3>Education</h3>
                        </span>
                    </div>
                    <Col className='col-lg-8 qualification__container__row__col d-flex flex-column justify-content-center'>

                        <div className='qualification__container__row__col__content display d-flex flex-column justify-content-center align-items-center' id='work'>                        

                            <div className='qualification__container__row__col__content__one d-flex justify-content-end gap-4'>
                                <div className='qualification__container__row__col__content__one__desc'>
                                    <h3>Administrator</h3>
                                    <p>Niazi Medical VIP Complex</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; Dec, 2016 - Present</span>
                                </div>
                                <div className='qualification__container__row__col__content__one__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__one__shape__round'></span>
                                    <span className='qualification__container__row__col__content__one__shape__line'></span>
                                </div>
                            </div>
                            <div className='qualification__container__row__col__content__two d-flex justify-content-start gap-4'>
                                <div className='qualification__container__row__col__content__two__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__two__shape__round'></span>
                                    <span className='qualification__container__row__col__content__two__shape__line'></span>
                                </div>
                                <div className='qualification__container__row__col__content__two__desc'>
                                    <h3>Administrator</h3>
                                    <p>Ajwa Car Wash L.L.C Dubai</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; Mar, 2022 - Jul, 2023</span>
                                </div>
                            </div>
                            <div className='qualification__container__row__col__content__three d-flex justify-content-end gap-4'>
                                <div className='qualification__container__row__col__content__three__desc'>
                                    <h3>Administrator</h3>
                                    <p>Mubarak Medical Complex</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; Jan, 2017 - Jun, 2019</span>
                                </div>
                                <div className='qualification__container__row__col__content__three__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__three__shape__round'></span>
                                    <span className='qualification__container__row__col__content__three__shape__line'></span>
                                </div>
                            </div>
                            <div className='qualification__container__row__col__content__four d-flex justify-content-start gap-4'>
                                <div className='qualification__container__row__col__content__four__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__four__shape__round'></span>
                                    {/* <div className='qualification__container__row__col__content__four__shape__line'></div> */}
                                </div>
                                <div className='qualification__container__row__col__content__four__desc'>
                                    <h3>Event Organizer</h3>
                                    <p>Araiz Event Organizer</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; Jan, 2016 - Present</span>
                                </div>
                            </div>

                        </div>

                        <div className='qualification__container__row__col__content hide d-flex flex-column justify-content-center align-items-center' id='education'>
                            
                            <div className='qualification__container__row__col__content__one d-flex justify-content-end gap-4'>
                                <div className='qualification__container__row__col__content__one__desc'>
                                    <h3>Bachelor of Arts</h3>
                                    <p>Sargodha - University</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; 2012 - 2014</span>
                                </div>
                                <div className='qualification__container__row__col__content__one__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__one__shape__round'></span>
                                    <span className='qualification__container__row__col__content__one__shape__line'></span>
                                </div>
                            </div>
                            <div className='qualification__container__row__col__content__two d-flex justify-content-start fsc gap-4'>
                                <div className='qualification__container__row__col__content__two__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__two__shape__round'></span>
                                    <div className='qualification__container__row__col__content__two__shape__line'></div>
                                </div>
                                <div className='qualification__container__row__col__content__two__desc'>
                                    <h3>FA</h3>
                                    <p>Islamabad - AIOU</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; 2009 - 2012</span>
                                </div>
                            </div>
                            <div className='qualification__container__row__col__content__three d-flex justify-content-end gap-4'>
                                <div className='qualification__container__row__col__content__three__desc'>
                                    <h3>Matric with Science</h3>
                                    <p>Mianwali - School</p>
                                    <span><i class="ri-calendar-line"></i> &nbsp; 2003 - 2005</span>
                                </div>
                                <div className='qualification__container__row__col__content__three__shape d-flex flex-column align-items-center'>
                                    <span className='qualification__container__row__col__content__three__shape__round'></span>
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

export default Qualification