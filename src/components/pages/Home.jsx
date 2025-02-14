import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <GlobalContainer>
      <Aside>
        <Link to={"/header"} style={{ textDecoration: "none" }}>
          <h1>HOME</h1>
        </Link>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          animi quis molestiae perferendis quisquam illum fugit vel itaque cum
          asperiores assumenda dignissimos, provident suscipit consequatur?
          Nesciunt magnam tenetur distinctio minus! <hr style={{marginTop: "20px"}} /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium quaerat pariatur libero quo
          sequi illum laborum optio laboriosam similique, reprehenderit est
          expedita id. Architecto, nemo dignissimos! Dicta nesciunt vero
          suscipit?x
        </div>
      </Aside>
      <Container>
        <header>
          <Link to={"html"} style={{ textDecoration: "none" }}>
            <span>html</span>
          </Link>
          <Link to={"css"} style={{ textDecoration: "none" }}>
            <span>css</span>
          </Link>
          <Link to={"js"} style={{ textDecoration: "none" }}>
            <span>js</span>
          </Link>
          <Link to={"java"} style={{ textDecoration: "none" }}>
            <span>java</span>
          </Link>
        </header>
        <Outlet />
      </Container>
    </GlobalContainer>
  );
};

export default Home;

const GlobalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
`;
const Aside = styled.aside`
  height: 700px;
  width: 26%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0.01px #e4e4e4;
  & h1 {
    cursor: pointer;
    color: black;
    width: 80px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0.01px #e4e4e4;
    margin: 20px auto;
  }
  & div {
    letter-spacing: 5px;
    margin-top: 30px;
    text-align: start;
    padding: 20px;
  }
`;
const Container = styled.div`
  width: 72%;

  & span {
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 5px;
    background-color: #878787;
    color: #ffffff;
  }
`;
