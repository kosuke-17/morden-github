import React from "react";
import styled from "styled-components";

//  styled-components
// ----------------------------------------------
const List = styled.li`
  list-style: none;
`;

// ----------------------------------------------

const Contributions = () => {
  return (
    <>
      <div>1000 contributions in the last year</div>
      <List>
        <li>□</li>
        <li>□</li>
        <li>□</li>
        <li>□</li>
        <li>□</li>
        <li>□</li>
        <li>□</li>
      </List>
    </>
  );
};

export default Contributions;
