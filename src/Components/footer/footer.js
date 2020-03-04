import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class footer extends Component {
    state={
        nav:1
    }

    updateNav = (option) =>{
        this.setState({ nav: option})
    }
    
    render() {
        let colorPrincipal = {color: "#808E9B"};
        
        return (
          <footer className='container-fluid footer mt-auto py-3 shadow-lg fixed-bottom bg-light'>
                <div className="row ">
                    <div className="col">
                        <Link to="/shipments/" style={colorPrincipal} onClick={() => this.updateNav(1)}>
                            
                            <small class="d-block">Embarque</small>
                        </Link>
                    </div>
                    <div className="col">

                        <Link to="/partners/" style={colorPrincipal} onClick={() =>this.updateNav(2)}>
                            
                            <small class="d-block">Socios</small>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/account/" style={colorPrincipal} onClick={() => this.updateNav(3)}>
                            <small class="d-block">Cuenta</small>
                        </Link>
                    </div>
                </div>
        </footer>
        )
    }
}


