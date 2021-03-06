import { Box, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";

import type {
  ContributionType,
  ContributionWeeksType,
  ContributionDaysType,
} from "../../utils/Types";

//  styled-components
// ----------------------------------------------
const ScrollStyle = styled.div`
  overflow: scroll;
`;
// ----------------------------------------------
type Props = {
  contributions: ContributionType;
};

const Contributions: React.FC<Props> = (props) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 10,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <ScrollStyle
          style={{
            scrollbarColor: "red yellow",
          }}
        >
          <CardContent
            style={{
              display: "inline-block",
            }}
          >
            {/* <svg width="100%" height="15">
              <text x="40" y="12" fontSize="15">
                Apr
              </text>
              <text x="70" y="12" fontSize="15">
                May
              </text>
              <text x="145" y="12" fontSize="15">
                Jun
              </text>
            </svg> */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
              }}
            >
              <svg width="40" height="133">
                <text x="0" y="30" fontSize="15">
                  Mon
                </text>
                <text x="0" y="68" fontSize="15">
                  Wed
                </text>
                <text x="0" y="106" fontSize="15">
                  Fri
                </text>
              </svg>
              {props.contributions.weeks.map((week: any, index: number) => (
                <>
                  <div key={index}>
                    {week.contributionDays.map(
                      (day: ContributionDaysType, index: number) => (
                        <>
                          <div key={index}>
                            <svg width="15" height="15">
                              <rect
                                width="11"
                                height="11"
                                x="0"
                                y="0"
                                fill={`${day.color}`}
                                data-date={`${day.date}`}
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
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div>Less</div>
              &nbsp;
              <svg width="15" height="15">
                <rect
                  width="10"
                  height="10"
                  x="0"
                  y="2"
                  fill={`#ebedf0`}
                ></rect>
              </svg>
              <svg width="15" height="15">
                <rect
                  width="10"
                  height="10"
                  x="0"
                  y="2"
                  fill={`#9be9a8`}
                ></rect>
              </svg>
              <svg width="15" height="15">
                <rect
                  width="10"
                  height="10"
                  x="0"
                  y="2"
                  fill={`#40c463`}
                ></rect>
              </svg>
              <svg width="15" height="15">
                <rect
                  width="10"
                  height="10"
                  x="0"
                  y="2"
                  fill={`#40c463`}
                ></rect>
              </svg>
              <svg width="15" height="15">
                <rect
                  width="10"
                  height="10"
                  x="0"
                  y="2"
                  fill={`#216e39`}
                ></rect>
              </svg>
              <div>More</div>
            </Box>
          </CardContent>
        </ScrollStyle>
      </Card>
    </>
  );
};

export default Contributions;
