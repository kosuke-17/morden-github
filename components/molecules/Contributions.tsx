import React from "react";
import styled from "styled-components";

//  styled-components
// ----------------------------------------------
const List = styled.li`
  list-style: none;
`;

// ----------------------------------------------

const Contributions = (props: any) => {
  // const Lect = styled.div`
  //   // color: ${props.child.contributionDays[0].color};
  //   fill: blue;
  // `;
  const OutLine = styled.div`
    outline: solid;
    border-radius: 5px;
  `;
  console.log(props);
  return (
    <>
      <div>{props.child.totalContributions} contributions in the last year</div>
      <OutLine>
        {/* {props.child.weeks.map((week: any, index: number) => (
          <>
            <div key="index">{week.contributionDays[0].date}</div>
            <svg width="15" height="15">
              <rect
                width="11"
                height="11"
                x="0"
                y="0"
                fill={`${week.contributionDays[0].color}`}
              ></rect>
            </svg>
          </>
        ))} */}
        {props.child.weeks.map((week: any, index: number) => (
          <>
            {week.contributionDays.map((contribution: any, index: number) => (
              <>
                {/* <div key="index">{contribution.date}</div> */}
                <svg width="15" height="15">
                  <rect
                    width="11"
                    height="11"
                    x="0"
                    y="0"
                    fill={`${contribution.color}`}
                  ></rect>
                </svg>
              </>
            ))}
          </>
        ))}

        {/* <div key="index">{props.child.weeks[0].contributionDays[1].date}</div>
          <div key="index">{props.child.weeks[0].contributionDays[2].date}</div>
          <div key="index">{props.child.weeks[0].contributionDays[3].date}</div>
          <div key="index">{props.child.weeks[0].contributionDays[4].date}</div>
          <div key="index">{props.child.weeks[0].contributionDays[5].date}</div>
          <div key="index">{props.child.weeks[0].contributionDays[6].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[0].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[1].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[2].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[3].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[4].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[5].date}</div>
          <div key="index">{props.child.weeks[1].contributionDays[6].date}</div> */}
        {/* <svg width="15" height="15">
              <rect
                width="11"
                height="11"
                x="0"
                y="0"
                fill={`${contribution.contributionDays[0].color}`}
              ></rect>
            </svg> */}
        {/* <div>{contribution.contributionDays[1].date}</div> */}
        {/* <svg width="15" height="15">
              <rect
                width="11"
                height="11"
                x="0"
                y="0"
                fill={`${contribution.contributionDays[1].color}`}
              ></rect>
              <br />
            </svg> */}
        {/* <svg width="15" height="15">
              <rect
                width="11"
                height="11"
                x="0"
                y="0"
                fill={`${contribution.contributionDays[2].color}`}
              ></rect>
            </svg> */}
        {/* ))} */}
        {/* <List> */}
        {/* <svg>
        <rect width="11" height="11" x="0" y="0"></rect>
        <rect width="11" height="11" x="0" y="15"></rect>
        <rect width="11" height="11" x="0" y="30"></rect>
        <rect width="11" height="11" x="0" y="45"></rect>
        <rect width="11" height="11" x="0" y="60"></rect>
        <rect width="11" height="11" x="0" y="75"></rect>
        <rect width="11" height="11" x="0" y="90"></rect>
        <rect width="11" height="11" x="15" y="0"></rect>
        <rect width="11" height="11" x="15" y="15"></rect>
        <rect width="11" height="11" x="15" y="30"></rect>
        <rect width="11" height="11" x="15" y="45"></rect>
        <rect width="11" height="11" x="15" y="60"></rect>
        <rect width="11" height="11" x="15" y="75"></rect>
        <rect width="11" height="11" x="15" y="90"></rect>
      </svg> */}
        {/* </List> */}
      </OutLine>
    </>
  );
};

export default Contributions;
