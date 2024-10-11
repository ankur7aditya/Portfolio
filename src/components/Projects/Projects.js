import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/E-commerce.png";
import Candy from "../../Assets/Projects/CandyCrush.png";
import RockPaper from "../../Assets/Projects/RockPaper.png";
import amazon from "../../Assets/Projects/AmazonClone.png";
import BHP from "../../Assets/Projects/bhp_ML.png";
import weather from "../../Assets/Projects/weather.png";
import invoice from "../../Assets/Projects/invoice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BHP}
              isBlog={false}
              title="Banglore House Price Prediction"
              description="Developed an end-to-end machine learning model to predict house prices. Performed data cleaning and outlier removal, then applied GridSearchCV with KFold to identify the optimal model. Deployed the solution using a Flask API, connecting it to a frontend for user interaction and predictions."
              ghLink="https://github.com/ankur7aditya/Bangalore_House_Prediction"
              // demoLink="https://invoice-lilac-alpha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Management App"
              description="Designed and implemented an Invoice Management application using React and Firebase.The app features invoice generation, monthly report views, and real-time data synchronization. Developed a user-friendly interface to streamline invoice creation and management. Integrated authentication to ensure secure data handling. Use (id:ankur14@gmail.com) (password:123456) for demo purpose."
              ghLink="https://github.com/ankur7aditya/invoice"
              demoLink="https://invoice-lilac-alpha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="Developed a feature-rich e-commerce application using MERN stack (MongoDB, Express, React, Node.js). The application includes functionalities such as order history tracking, user profile management, and an admin panel for managing products and orders.Use (id:ankuraditya1790027@gmail.com) (password:Ankur123) for demo purpose."
              ghLink="https://github.com/ankur7aditya/MERN-ecommerce"
              demoLink="https://mern-ecommerce-orpin.vercel.app/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Candy}
              isBlog={false}
              title="Candy Crush"
              description="Built a interactive candy crush game using vanilla JavaScript and HTML CSS. Used the knowledge of Data Structure and Algorithm for pattern matching."
              ghLink="https://github.com/ankur7aditya/Candy-Crush"
              demoLink="https://ankur7aditya.github.io/Candy-Crush/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RockPaper}
              isBlog={false}
              title="Rock Paper Scissor"
              description="In this Rock-Paper-Scissors Game, I learnt the use of local storage to store the score and function of Math in javascript for generating random output of computer game."
              ghLink="https://github.com/ankur7aditya/Rock-Paper-Scissors-Game"
              demoLink="https://ankur7aditya.github.io/Rock-Paper-Scissors-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone(Frontend)"
              description="Used vanilla CSS to replicate the landing page of Amazon. Used the knowledge of flex-box, grid and other CSS box model and styling."
              ghLink="https://github.com/ankur7aditya/Amazon-Clone-HTML-CSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Used the weather API and used to display the weather of the input city. Learnt how to call an API and optimising the call for seamless output."
              ghLink="https://github.com/ankur7aditya/ExpressWeatherApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
