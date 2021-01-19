import * as React from "react";
import { Row, Col, } from 'reactstrap';
import './Header.css';

const user = require("./user.svg") as string;
const logo = require("./logo.svg") as string;

class Header extends React.Component {

    render() {

        return (
            <div className="Header">
                <Row>
                    <Col> 
                        <div><img src={logo} className="App-logo" alt="logo" /></div>
                        <div style={{fontSize: '18px', color:'#61dafb'}}>Happy coding!</div>
                    </Col>
                    <Col className="text-right">
                        <a
                          href="https://www.linkedin.com/in/markovicmarco/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        <img src={user} width="20px" alt="user"/>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
