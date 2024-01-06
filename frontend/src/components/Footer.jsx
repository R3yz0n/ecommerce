import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <Col>
                    <Row className='text-center py-3'>
                        <p>Ecommerce &copy; {currentYear} </p>
                    </Row>

                </Col>

            </Container>
        </footer>
    )
}

export default Footer