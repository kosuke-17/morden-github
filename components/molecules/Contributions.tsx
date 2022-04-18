import { Box, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";

//  styled-components
// ----------------------------------------------

// ----------------------------------------------

const Contributions = (props: any) => {
  return (
    <>
      <div>{props.child.totalContributions} contributions in the last year</div>
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
    </>
  );
};

export default Contributions;
