import React from "react";
import styled from "styled-components";

const ItInfo = () => {
  return (
    <Section>
      <h1>Information Technology</h1>
      <Text>
        <b>What is information technology?</b> <hr /> Information technology
        (IT) is the use of any computers, storage, networking and other physical
        devices, infrastructure and processes to create, process, store, secure
        and exchange all forms of electronic data. Typically, IT is used in the
        context of business operations, as opposed to technology used for
        personal or entertainment purposes. The commercial use of IT encompasses
        both computer technology and telecommunications.
      </Text>
    </Section>
  );
};

export default ItInfo;

const Section = styled.section`
  margin-top: 60px;
  padding: 30px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    padding: 10px;
    box-shadow: 0 0 10px 0.01px #c7c7c7;
    border-radius: 10px;
    background: -webkit-linear-gradient(#000000, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Text = styled.div`
  width: 60%;
  letter-spacing: 5px;
  border-radius: 10px;
  text-align: start;
  padding: 10px;
  box-shadow: 0 0 20px 0.01px #eaeaea;
`;
