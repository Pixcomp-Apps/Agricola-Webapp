import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class account extends Component {

    irashipments = () => {
        this.props.history.push({pathname:'/shipments'})
    }

    iraparters = () => {
        this.props.history.push({pathname:'/partners'})
    }

    render() {
        return (
            <Container>
            <Row>
                <Col>
                    <p>
                        Es el account
                    </p>
                    <Button onClick={this.irashipments}>Shipments</Button>
                    <Button onClick={this.iraparters}>Partners</Button>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default account

