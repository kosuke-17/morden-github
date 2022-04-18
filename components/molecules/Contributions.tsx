import { Box, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";

//  styled-components
// ----------------------------------------------
const List = styled.li`
  list-style: none;
`;
// const Svg = styled.svg`
//   width: 15;
//   height: 15;
//   display: flex;
//   align-items: "center";
// `;

// ----------------------------------------------

const Contributions = (props: any) => {
  // const Lect = styled.div`
  //   // color: ${props.child.contributionDays[0].color};
  //   fill: blue;
  // `;
  const OutLine = styled.div`
    outline: solid;
    border-radius: 5px;
    color: blue;
    padding: 15px;
    margin: 5px 20px 0px 0px;
  `;
  console.log(props);
  return (
    <>
      <div>{props.child.totalContributions} contributions in the last year</div>
      {/* <OutLine> */}
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 10,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
            }}
          >
            {props.child.weeks.map((week: any, index: number) => (
              <>
                <div>
                  {week.contributionDays.map(
                    (contribution: any, index: number) => (
                      <>
                        {/* <p key="index">{contribution.date}</p> */}
                        <div>
                          <svg width="15" height="15">
                            <rect
                              width="11"
                              height="11"
                              x="0"
                              y="0"
                              fill={`${contribution.color}`}
                            ></rect>
                          </svg>
                        </div>
                      </>
                    )
                  )}
                </div>
                {/* ここで横並び */}
              </>
            ))}
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div>Less</div>
            &nbsp;
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="0" fill={`#ebedf0`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="0" fill={`#9be9a8`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="0" fill={`#40c463`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="0" fill={`#40c463`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="0" fill={`#216e39`}></rect>
            </svg>
            <div>More</div>
          </Box>
        </CardContent>
      </Card>
      {/* </OutLine> */}
    </>
  );
};

export default Contributions;
