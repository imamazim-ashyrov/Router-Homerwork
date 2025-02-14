import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const JsComponent = () => {
  return (
    <div>
      <Header>
        <Link to={"react-js"} style={{textDecoration: "none"}}><span>React JS</span></Link>
        <Link to={"vue-js"} style={{textDecoration: "none"}}><span>Vue JS</span></Link>
      </Header>
    <Outlet/>
    </div>
  );
};

export default JsComponent;

const Header = styled.header`
  background-color: white;
  width: 70%;
  margin: 50px auto;
`;

