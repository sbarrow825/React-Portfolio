import React from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Title from "../../components/Title"

function Contact() {
    return (
    <Container>
        <br></br>
        <br></br>
        <Title title="Contact Me" />
        <br></br>
        <Row>
            <Col classes="col-md-6">
                <p><b>Contact Info</b></p>
                <p><b>Email:</b> sbarrow825@berkeley.edu</p>
                <p><b>Phone:</b> (619) 994-5066</p>
            </Col>
            <Col classes="col-md-6">
                <p><b>Additional Links</b></p>
                <p><a href="https://github.com/sbarrow825">Github</a></p>
                <p><a href="https://www.linkedin.com/in/sam-barrow">LinkedIn</a></p>
                <p><a href="https://docs.google.com/document/d/1rQYdyvs1t3_zcwdfYIZCwLMnTUHyK5R_d6SX3lC6iY0/edit?usp=sharing">Resume</a></p>
            </Col>
        </Row>
    </Container>
    )
} 

export default Contact;