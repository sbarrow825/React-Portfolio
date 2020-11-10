import React from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Title from "../../components/Title"
import WIP from "./assets/WIP-Logo.jpg"
import WIPGif from "./assets/WIPGif.gif"
import QUAN from "./assets/QUAN-Logo.png"
import QUANGif from "./assets/QUANGif.gif"
import PropertyMover from "./assets/PropertyMover.png"
import PropertyMoverGif from "./assets/PropertyMover.gif"
import "./style.css"

function Projects() {
    return (
        <Container id="projects">
            <Title title={"Projects"} />
            <br></br>
            <Row>
                <Col classes="col-md-6">
                    <h1 className="projectTitle">QUAN</h1>
                    <img src={QUAN} className="QUAN-Logo" alt="QUAN Logo" />
                    <Row>
                        <Col classes="col-md-2"></Col>
                        <Col classes="col-md-4">
                            <a href="https://github.com/GabeSucich/InvestmentSimluator" className="btn btn-dark">Github Repo</a>
                        </Col>
                        <Col classes="col-md-4">
                            <a href="https://fast-mesa-56626.herokuapp.com/" className="btn btn-dark">Deployed Link</a>
                        </Col>
                        <Col classes="col-md-2"></Col>
                    </Row>
                </Col>
                <Col classes="col-md-6">
                    <h4>QUAN is an educational application that teaches the user about the stock market. Users are able to experiment by playing around with basic investing strategies.</h4>
                    <img src={QUANGif} className="QUANGif" alt="QUAN gif" />
                </Col>
            </Row>

            <br></br>
            <Row>
                <Col classes="col-md-6">
                    <h1 className="projectTitle">WIP</h1>
                    <img src={WIP} className="WIP-Logo" alt="WIP Logo" />
                    <Row>
                        <Col classes="col-md-2"></Col>
                        <Col classes="col-md-4">
                            <a href="https://github.com/crackedsnowboard/project-maven" className="btn btn-dark">Github Repo</a>
                        </Col>
                        <Col classes="col-md-4">
                            <a href="https://vast-hollows-48558.herokuapp.com/" className="btn btn-dark">Deployed Link</a>
                        </Col>
                        <Col classes="col-md-2"></Col>
                    </Row>
                </Col>
                <Col classes="col-md-6">
                    <h4>WIP is a progress tracking app that allows the user to set goals and record their progress towards them</h4>
                    <img src={WIPGif} className="WIPGif" alt="WIP gif" />
                </Col>
            </Row>

            <br></br>
            <br></br>
            <Row>
                <Col classes="col-md-6">
                    <h1 className="projectTitle">Property Mover</h1>
                    <img src={PropertyMover} className="PropertyMover-Logo" alt="PropertyMover Logo" />
                    <Row>
                        <Col classes="col-md-2"></Col>
                        <Col classes="col-md-4">
                            <a href="https://github.com/sbarrow825/Coding-Bootcamp-Project-1-Zillow-Maps-API" className="btn btn-dark">Github Repo</a>
                        </Col>
                        <Col classes="col-md-4">
                            <a href="https://sbarrow825.github.io/Coding-Bootcamp-Project-1-Zillow-Maps-API/" className="btn btn-dark">Deployed Link</a>
                        </Col>
                        <Col classes="col-md-2"></Col>
                    </Row>
                </Col>
                <Col classes="col-md-6">
                    <h4>Property Mover is a real estate app that helps the user look for housing options when moving to a new area</h4>
                    <img src={PropertyMoverGif} className="PropertyMoverGif" alt="PropertyMover gif" />
                </Col>
            </Row>
            <br></br>
            <br></br>
        </Container>

    )
}

export default Projects;