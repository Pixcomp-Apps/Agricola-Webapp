import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class shipments extends Component {
    iraparters = () => {
        this.props.history.push({pathname:'/partners'})
    }

    iraaccount = () => {
        this.props.history.push({pathname:'/account'})
    }

    render() {
        return (
            <Container>
            <Row>
                <Col>
                    <p>
                        Es el shipments
                    </p>
                    <Button onClick={this.iraparters}>Partners</Button>
                    <Button onClick={this.iraaccount}>Account</Button>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default shipments
