import React from 'react';
import "./style.css"
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";

function Title(props) {
    return (
        <div className="titleContainer">
            <Container>
                <Row>
                    <Col>
                        <h1>{props.title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Title;