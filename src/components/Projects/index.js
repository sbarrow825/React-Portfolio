import React from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Title from "../../components/Title"
import WIP from "./assets/WIP-Logo.jpg"
import WIPGif from "./assets/WIPGif.gif"
import QUAN from "./assets/QUAN-Logo.png"
import "./style.css"

function Projects() {
    return (
        <Container>
            <Title title={"Projects"} />
            <br></br>
            <Row>
                <Col classes="col-md-6">
                    <h1 className="projectTitle">WIP</h1>
                    <img src={WIP} className="WIP-Logo" alt="WIP Logo" />
                </Col>
                <Col classes="col-md-6">
                    <h4>WIP is a progress tracking app that allows the user to set goals and record their progress towards them</h4>
                    <img src={WIPGif} className="WIPGif" alt="WIP gif" />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;