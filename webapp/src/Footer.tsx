import React from 'react';
import { Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends React.Component {

    render() {

        return (
            <div className="Footer">
                <Row>
                    <Col>
                        <div style={{fontSize: '18px'}}>Do you have questions?</div>
                        <div style={{color: '#248BF2', marginTop: '10px'}}>help@protodao.com</div>
                    </Col>
                    <Col className="text-right">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/sharp.svg" width="20px" alt=""/></a>&nbsp;&nbsp;&nbsp;
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/twitter.svg" width="20px" alt=""/></a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
