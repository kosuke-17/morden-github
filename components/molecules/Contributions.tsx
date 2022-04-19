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

// ----------------------------------------------
type Props = {
  contributions: ContributionType;
};

const Contributions: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <>
      <div>
        {props.contributions.totalContributions} contributions in the last year
      </div>
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
              <rect width="10" height="10" x="0" y="2" fill={`#ebedf0`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="2" fill={`#9be9a8`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="2" fill={`#40c463`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="2" fill={`#40c463`}></rect>
            </svg>
            <svg width="15" height="15">
              <rect width="10" height="10" x="0" y="2" fill={`#216e39`}></rect>
            </svg>
            <div>More</div>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Contributions;
