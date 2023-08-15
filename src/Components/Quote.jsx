import React from 'react'
import './Quote.scss'
import {Container, Row, Col} from 'reactstrap'
import { Link } from 'react-scroll'

const Quote = () => {

  return (
    <>
        <div className='quote'>
            <Container className='quote__container'>
                <Row className='quote__container__row d-flex justify-content-center'>
                    <Col className='col-lg-10 quote__container__row__col d-flex justify-content-center align-items-center'>
                        <div className='quote__container__row__col__wrapper d-flex flex-wrap justify-content-between align-items-center'>
                            <h2 className='quote__container__row__col__wrapper__title'>
                            Empowering wellness and forging connections through healthcare administration and event enchantment.
                            </h2>
                            <Link
                                to='contact' smooth={true} spy={true}
                                ><button className='btn btn-primary quote__container__row__col__wrapper__btn'>Get a Quote</button>
                            </Link>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    </>
  )
}

export default Quote