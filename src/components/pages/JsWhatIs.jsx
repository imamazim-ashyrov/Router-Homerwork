import React from "react";
import styled from "styled-components";

const JsWhatIs = () => {
  return (
    <Text>
      <b>JavaScript is</b> a scripting or programming language. <hr /> That
      allows you to implement complex features on web pages — every time a web
      page does more than just sit there and display static information for you
      to look at — displaying timely content updates, interactive maps, animated
      2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that
      JavaScript is probably involved. It is the third layer of the layer cake
      of standard web technologies, two of which (HTML and CSS) we have covered
      in much more detail in other parts of the Learning Area.
    </Text>
  );
};

export default JsWhatIs;

const Text = styled.div`
  width: 60%;
  letter-spacing: 5px;
  border-radius: 10px;
  text-align: start;
  padding: 10px;
  box-shadow: 0 0 20px 0.01px #eaeaea;
  margin: auto;
  font-weight: 600;
`;
