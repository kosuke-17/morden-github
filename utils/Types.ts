import { Dispatch, SetStateAction } from "react";

/**
 * ログイン、ログアウトのための型
 */
export type LoginType = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  getAccessToken?: () => void;
};

/**
 * 草用の型
 */
export type ContributionType = {
  totalContributions: number;
  weeks: [
    {
      contributionDays: [
        {
          color: string;
          contributionDays: [
            {
              color: string;
              contributionDays: number;
              contributionLevel: number;
              date: string;
              weekday: number;
            }
          ];
        }
      ];
    }
  ];
};

// Overviewデータ用の型
export type OverviewType = {
  user: {
    repositories: {
      nodes: [
        {
          id: string;
          name: string;
          description: string;
          url: string;
          createdAt: string;
          languages: {
            edges: [
              {
                node: {
                  id: string;
                  color: string;
                  name: string;
                };
              }
            ];
          };
        }
      ];
    };
    pinnedItems?: {
      nodes?: [
        {
          id: string;
          name: string;
          languages: {
            edges: [
              {
                node: {
                  id: string;
                  name: string;
                  color: string;
                };
              }
            ];
          };
          createdAt: string;
          description: string;
          url: string;
        }
      ];
    };
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: [
          {
            contributionDays: [
              {
                color: string;
                contributionCount: number;
                contributionLevel?: string;
                date: string;
                weekday: number;
              }
            ];
          }
        ];
      };
    };
  };
};
