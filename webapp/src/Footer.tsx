import * as React from "react";
import { Row, Col } from 'reactstrap';
import './Footer.css';

const octocat = require("./octocat.svg") as string;


class Footer extends React.Component {

    render() {

        return (
            <div className="Footer">
                <Row>
                    <Col>
                        <div style={{fontSize: '9px', color:'white'}}>Blazing fast, zero configuration web application bundler.</div>
                        <div style={{color: '#61dafb', marginTop: '10px'}}>
                        <a
                          className="Footer-link"
                          href="https://parceljs.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        Use Parcel
                        </a>
                        </div>
                    </Col>
                    <Col className="text-right">
                        <a
                          href="https://github.com/markovicmarco"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        <img src={octocat} width="45px" alt="octocat"/>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
