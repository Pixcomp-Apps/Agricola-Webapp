import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class partners extends Component {

    iraaccount = () => {
        this.props.history.push({pathname:'/account'})
    }

    irashipments = () => {
        this.props.history.push({pathname:'/shipments'})
    }

    render() {
        return (
            <Container>
            <Row>
                <Col>
                    <p>
                        Es el partners
                    </p>
                    <Button onClick={this.irashipments}>Shipments</Button>
                    <Button onClick={this.iraaccount}>Account</Button>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default partners
