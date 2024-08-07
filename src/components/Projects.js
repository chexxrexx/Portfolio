import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/fonts/img/ss1.png";
import proj2 from "../assets/fonts/img/ss2.png";
import proj3 from "../assets/fonts/img/ss3.png";
import colorSharp2 from "../assets/fonts/img/color-sharp2.png";
import proj4 from "../assets/fonts/img/ss4.png";
import proj5 from "../assets/fonts/img/ss5.png";
import proj6 from "../assets/fonts/img/ss6.png";
import proj7 from "../assets/fonts/img/ss7.png";
import proj8 from "../assets/fonts/img/ss8.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects that aren't necessarily completed but are sort of close to their finished product. There are quite a few that are finished though. The main three will be put here but otherwise just look at my github page for more info.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Snowman Minigame</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Name Picker Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Silly Excel Stuff</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Fun holiday themed minigame | Click the snowmen that appear at random times to climb the leaderboard and win!</p>
                      <Row>
                        <Col xs={12} md={4}>
                          <img src={proj1} className="img-fluid" alt="Project Image 1" />
                        </Col>
                        <Col xs={12} md={4}>
                          <img src={proj2} className="img-fluid" alt="Project Image 2" />
                        </Col>
                        <Col xs={12} md={4}>
                          <img src={proj3} className="img-fluid" alt="Project Image 3" />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Just click a button and a bunch of names will be cycled through until you click again to stop.</p>
                      <Row>
                        <Col xs={12} md={6}>
                          <img src={proj4} className="img-fluid" alt="Project Image 1" />
                        </Col>
                        <Col xs={12} md={6}>
                          <img src={proj5} className="img-fluid" alt="Project Image 2" />
                        </Col>
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Simple shipment priority program that works with excel and is able to modify shipments within an excel file by adding comments and reordering shipments</p>
                      <Row>
                        <Col xs={12} md={4}>
                          <img src={proj6} className="img-fluid" alt="Project Image 1" />
                        </Col>
                        <Col xs={12} md={4}>
                          <img src={proj7} className="img-fluid" alt="Project Image 2" />
                        </Col>
                        <Col xs={12} md={4}>
                          <img src={proj8} className="img-fluid" alt="Project Image 3" />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}