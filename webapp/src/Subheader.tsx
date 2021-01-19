import * as React from "react";
import { Row, Col, } from 'reactstrap';
import './Subheader.css';

class Header extends React.Component {

    render() {

        return (
            <div className="Subheader">
                <Row>
                    <Col> 
                        <div style={{fontSize: '9px', color: '#fff', marginTop: '10px'}}>Validate your code correctly.</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
