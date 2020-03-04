import React, { Component } from 'react'
/*import logo from '../../logo.svg'*/
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class login extends Component {

    loginvalidation = () => {
        console.log('login','sirvio el click')
        this.props.history.push({pathname:'/shipments'})
    }

    render() {
        return (
            /*<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Que rollo mundo aqui TJAAR
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div>*/
            <Container>
                <Row>
                    <Col>
                        <p>
                            Aqui va el login
                        </p>
                        <Button onClick={this.loginvalidation}>Continuar</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default login;
