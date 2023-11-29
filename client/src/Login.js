import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8786eb53cc564d9e8279554a6a844819&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="text-center">
        <Col>
          <h1 className="display-3 mb-4 font-weight-bold text-white">
            Music Cafe
          </h1>
          <a
            className="btn btn-light btn-lg custom-button rounded-pill"
            href={AUTH_URL}
          >
            Login With Spotify
          </a>
        </Col>
      </Row>
    </Container>
  );
}
