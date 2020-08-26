import React from 'react';
import "./style.css"
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";

function AboutMe() {
    return (
        <Container>
            <Row>
                <Col classes="col-md-4">
                    <img className="ghProfile" src={"https://github.com/sbarrow825.png"} />
                </Col>
                <Col classes="col-md-8">
                    <h3>About Me</h3>
                    <p>Throughout my years at UC Berkeley, I've became greatly interested in computer science and am now looking to start my career in the technology field.</p>
                    <p>My computer science classes at Berkeley and UC Berkeley Extension's full stack coding bootcamp program have equipped me with the neccessary skills to succeed in the tech world.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;