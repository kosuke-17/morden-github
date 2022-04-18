import { Box } from "@mui/material";
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
    color: blue;
  `;
  console.log(props);
  return (
    <>
      <div>{props.child.totalContributions} contributions in the last year</div>
      <OutLine>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
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
      </OutLine>
    </>
  );
};

export default Contributions;
