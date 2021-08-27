import React from "react";

// Import assets
import nasaLogo from "../assets/nasa-logo.png";

// Import dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// Style Components
const ControlBtn = styled.button`
  font-family: "Do Hyeon", sans-serif;
  font-size: 30pt;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s all;
  width: 300px;
  &: hover {
    background: black;
    color: white;
  }
`;

export default function Controls(props) {
  return (
    <div className="controls">
      <div className="info-menu-container">
        <ControlBtn onClick={props.toggleInfo}>
          {props.showInfo ? "Hide" : "Show"} Info <FontAwesomeIcon icon={faBars} />
        </ControlBtn>
      </div>

      <img src={nasaLogo} alt="" />

      <div className="info-menu-container">
        <ControlBtn onClick={props.toggleFrame}>
          {props.hideFrame ? "Show" : "Hide"} Frame <FontAwesomeIcon icon={faBars} />
        </ControlBtn>
      </div>
    </div>
  );
}