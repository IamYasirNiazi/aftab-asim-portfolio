import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import NumberCounter from 'number-counter'

const Experience = () => {
  return (
    <>
        <div className='experience'>
            <Container className='experience__container'>
                <Row className='experience__container__row d-flex justify-content-center'>
                    <Col className='col-lg-10 experience__container__row__col d-flex flex-wrap justify-content-between align-items-center'>
                        <div className='experience__container__row__col__experience d-flex flex-wrap justify-content-end align-items-center gap-3'>
                                <span className='experience__container__row__col__experience__year'><NumberCounter end={3} start={0} delay='2' /></span>
                                <span className='experience__container__row__col__experience__desc'>Years of experience</span>
                        </div>
                        <div className='experience__container__row__col__experience d-flex flex-wrap justify-content-center align-items-center gap-3'>
                                <span className='experience__container__row__col__experience__year'><NumberCounter end={10} start={0} delay='2' /></span>
                                
                                <span className='experience__container__row__col__experience__desc'>Completed projects</span>
                        </div>
                        <div className='experience__container__row__col__experience d-flex flex-wrap justify-content-start align-items-center gap-3'>
                                <span className='experience__container__row__col__experience__year'><NumberCounter end={5} start={0} delay='2' /></span>
                                <span className='experience__container__row__col__experience__desc'>Worked with companies</span>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Experience