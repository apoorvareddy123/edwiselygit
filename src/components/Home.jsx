import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../context/GlobalContext";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  ProgressBar,
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const { name } = useContext(globalContext);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    TestData();
  }, []);

  const TestData = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setUsersData(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <Navbar bg="green" expand="lg" style={{ backgroundColor: "green" }}>
        <Container style={{ backgroundColor: "green" }}>
          <Navbar.Brand href="Java" style={{ color: "#0000FF" }}>
            {name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{ color: "Yellow", fontWeight: "bold" }}
                active={true}
              >
                List of courses
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        class="d-flex flex-row justify-content-center w-100 align-items-center"
        style={{ height: "70vh", gap: 20 }}
      >
        <div
          style={{ height: "100px", width: "100px" }}
          onClick={() => {
            window.location.href = "Java";
          }}
        >
          <img
            src={require("../images/java.png")}
            class="img-fluid"
            alt="Responsive image"
          ></img>
          <ProgressBar now={60} label={`${60}%`} />
        </div>
        <div
          style={{ height: "100px", width: "100px" }}
          onClick={() => {
            window.location.href = "Python";
          }}
        >
          <img
            src={require("../images/python.png")}
            class="img-fluid"
            alt="Responsive image"
            style={{ height: "100px" }}
          ></img>
          <ProgressBar now={40} label={`${40}%`} />
        </div>
        <div style={{ height: "100px", width: "100px" }}>
          <img
            src={require("../images/React.png")}
            class="img-fluid"
            alt="Responsive image"
          ></img>
          <ProgressBar now={90} label={`${90}%`} />
        </div>
      </div>
    </div>
  );
};

export default Home;
