import React from 'react';
import "./style.css"
import GitHubLogo from "../../assets/GitHub-Logo.png";
import LinkedInLogo from "../../assets/LinkedIn-Logo.png";
import GmailLogo from "../../assets/Gmail-Logo.png"
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";

function Jumbotron() {
    return (
        
        <div className="jumbotron jumbotron-fluid">
            <Container>
                <Row>
                    <Col classes="col-md-12">
                        <h1 className="display-3 d-inline">Samuel Barrow</h1>
                        <a className="btn mb-5" href="https://github.com/sbarrow825">
                            <img className="btn GitHub" src={GitHubLogo} />
                        </a>
                        <a className="btn mb-5" href="https://www.linkedin.com/in/sam-barrow">
                            <img className="btn LinkedIn" src={LinkedInLogo} />
                        </a>
                        <a className="btn mb-5" href="mailto:sbarrow825@berkeley.edu">
                            <img className="btn Gmail" src={GmailLogo} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>UC Berkeley B.S. in chemical engineering and full-stack coding bootcamp graduate looking to start a career in software engineering or full stack developement</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jumbotron;