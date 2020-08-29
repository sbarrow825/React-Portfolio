import React from 'react';
import Title from '../Title';
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import googleBooksReact from "./assets/googleBooksReact.gif"
import workoutTracker from "./assets/workoutTracker.gif"
import employeeTracker from "./assets/employeeTracker.gif"
import workDayScheduler from "./assets/workDayScheduler.gif"
import "./style.css"

function Assignments() {
    return (
        <Container>
            <Title title="Assignments" />
            <br></br>
            <Row>
                <Col classes="col-md-6">
                    <div className="card">
                        <img className="card-img-top" src={googleBooksReact} />
                        <br></br>
                        <h5 className="card-title text-center">
                            Google Books React
                    </h5>
                        <div className="card-body">
                            <p>Full-stack MERN application that allows the user to search for and favourite books using the Google Books API</p>
                            <Row>
                                <Col classes="col-md-6">
                                    <a href="https://github.com/sbarrow825/React-Google-Books-Search" className="btn btn-dark">Github Repo</a>
                                </Col>
                                <Col classes="col-md-6">
                                    <a href="https://immense-everglades-13293.herokuapp.com/" className="btn btn-dark">Deployed Link</a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col classes="col-md-6">
                    <div className="card">
                        <img className="card-img-top" src={workoutTracker} />
                        <br></br>
                        <h5 className="card-title text-center">
                            Fitness Tracker
                    </h5>
                        <div className="card-body">
                            <p>Tracking app using MongoDB that allows the user to save their workouts and view their weekly analysis at any time.</p>
                            <Row>
                                <Col classes="col-md-6">
                                    <a href="https://github.com/sbarrow825/Fitness-Tracker" className="btn btn-dark">Github Repo</a>
                                </Col>
                                <Col classes="col-md-6">
                                    <a href="https://radiant-sierra-79782.herokuapp.com/" className="btn btn-dark">Deployed Link</a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col classes="col-md-6">
                    <div className="card">
                        <img className="card-img-top" src={employeeTracker} />
                        <br></br>
                        <h5 className="card-title text-center">
                            Employee Tracker
                    </h5>
                        <div className="card-body">
                            <p>CLI based application with MySQL used to manage all the employee data for employees at a company</p>
                            <Row>
                                <Col classes="col-md-12">
                                    <a href="https://github.com/sbarrow825/Unit-12-MySQL-Homework-Employee-Tracker" className="btn btn-dark">Github Repo</a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col classes="col-md-6">
                    <div className="card">
                        <img className="card-img-top" src={workDayScheduler} />
                        <br></br>
                        <h5 className="card-title text-center">
                            Work Day Scheduler
                    </h5>
                        <div className="card-body">
                            <p>Real time, daily scheduling app that allows you to plan out your work day hour by hour.</p>
                            <Row>
                                <Col classes="col-md-6">
                                    <a href="https://github.com/sbarrow825/05-Third-Party-APIs-Work-Day-Scheduler" className="btn btn-dark">Github Repo</a>
                                </Col>
                                <Col classes="col-md-6">
                                    <a href="https://sbarrow825.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" className="btn btn-dark">Deployed Link</a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Assignments;