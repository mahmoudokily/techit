/** @format */

import { format } from "date-fns";
import {
  Box,
  Card,
  ColumnShape,
  Flex,
  StyledLink,
  Table,
  Typography,
} from "../../../_shared/UI";
import { PageLayout } from "../../../_shared/layouts/PageLayout";
import Svg from "./../../../_shared/styledComponents/Svg";
import { useState } from "react";
import { RowKey } from "react-base-table";
import styled, { createGlobalStyle } from "styled-components";
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer";

export const jobs = [
  {
    id: "1",
    role: "Front End Web Developer",
    type: "Full Time",
    place: "Remote",
    status: "AVAILABLE",
    date: 17005162210049,
    requirements: [
      "5+ years of web development experience",
      "Proficient in HTML and CSS, with a strong grasp of efficient page structuring",
      "Knowledge of web development patterns like MVC",
      "Deep familiarity with at least one web framework (e.g., React, Vue.js, Django) ",
      "Skilled in structuring web app components for reusability and consistent user experience",
      "Experience with data visualization (e.g., D3) and troubleshooting UI issues",
      "Strong focus on visual design and creating design guides",
      "Proficient in UI/UX design and decision-making for user interactions",
      "Comfortable leading front-end architecture and integrating best practices",
      "Familiar with asynchronous event-driven systems and the pub-sub model",
      "Understanding of web application security principles",
    ],
    parentId: null,

    children: [
      {
        parentId: "1",
        data: [
          {
            id: 1,
            summary:
              "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
          },
          {
            id: 2,
            summary:
              "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
          },
          {
            id: 3,
            summary:
              "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
          },
          {
            id: 4,
            summary:
              "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
          },
          {
            id: 5,
            summary:
              "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
          },
          {
            id: 6,
            summary:
              "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    role: "IT CLoud Developer",
    type: "Full Time",
    place: "Remote",
    status: "AVAILABLE",
    date: 1700513210049,
    parentId: null,

    requirements: [
      "5+ years of web development experience",
      "Proficient in HTML and CSS, with a strong grasp of efficient page structuring",
      "Knowledge of web development patterns like MVC",
      "Deep familiarity with at least one web framework (e.g., React, Vue.js, Django) ",
      "Skilled in structuring web app components for reusability and consistent user experience",
      "Experience with data visualization (e.g., D3) and troubleshooting UI issues",
      "Strong focus on visual design and creating design guides",
      "Proficient in UI/UX design and decision-making for user interactions",
      "Comfortable leading front-end architecture and integrating best practices",
      "Familiar with asynchronous event-driven systems and the pub-sub model",
      "Understanding of web application security principles",
    ],
    children: [
      {
        parentId: "2",
        summary:
          "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
      },
    ],
  },
  {
    id: "3",
    role: "Back End Web Developer",
    type: "Full Time",
    place: "Remote",
    status: "AVAILABLE",
    date: 1700510010049,
    parentId: null,

    requirements: [
      "5+ years of web development experience",
      "Proficient in HTML and CSS, with a strong grasp of efficient page structuring",
      "Knowledge of web development patterns like MVC",
      "Deep familiarity with at least one web framework (e.g., React, Vue.js, Django) ",
      "Skilled in structuring web app components for reusability and consistent user experience",
      "Experience with data visualization (e.g., D3) and troubleshooting UI issues",
      "Strong focus on visual design and creating design guides",
      "Proficient in UI/UX design and decision-making for user interactions",
      "Comfortable leading front-end architecture and integrating best practices",
      "Familiar with asynchronous event-driven systems and the pub-sub model",
      "Understanding of web application security principles",
    ],
    summary:
      "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
  },
  {
    id: "4",
    role: "Ux UI Designer",
    type: "Full Time",
    place: "Remote",
    status: "AVAILABLE",
    date: 1200516610049,
    parentId: null,

    requirements: [
      "5+ years of web development experience",
      "Proficient in HTML and CSS, with a strong grasp of efficient page structuring",
      "Knowledge of web development patterns like MVC",
      "Deep familiarity with at least one web framework (e.g., React, Vue.js, Django) ",
      "Skilled in structuring web app components for reusability and consistent user experience",
      "Experience with data visualization (e.g., D3) and troubleshooting UI issues",
      "Strong focus on visual design and creating design guides",
      "Proficient in UI/UX design and decision-making for user interactions",
      "Comfortable leading front-end architecture and integrating best practices",
      "Familiar with asynchronous event-driven systems and the pub-sub model",
      "Understanding of web application security principles",
    ],
    summary:
      "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
  },
];
type Column = ColumnShape<any>;
const GlobalStyle = createGlobalStyle`
  .BaseTable__row--depth-0 {
    height: 50px;
  }
  .BaseTable__row--depth-1 {

    flex-shrink:0!important;
  }
  .BaseTable__row--depth-0 .BaseTable__row-cell-text {
    overflow: scroll;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const WorkWithUs = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const nestedColumns: Column[] = [
    {
      width: 50,
      key: "id",
      dataKey: "id",
      title: "id",
    },
    {
      width: 300,
      key: "summary",
      dataKey: "summary",
      title: "summary",
      flexGrow: 3,
      flexShrink: 2,
    },
  ];
  const columns: Column[] = [
    {
      width: 150,
      key: "expand",
      dataKey: "expand",
      title: "expand",
      // dataGetter({ rowData }) {
      //   return (
      //     <Flex onClick={(e) => e.stopPropagation()}>
      //       <Svg name="Eye" />
      //       {/* {rowData.expanded ? <Svg name="Aye" /> : <Svg name="Close" />} */}
      //     </Flex>
      //   );
      // },
    },
    {
      width: 50,
      key: "id",
      dataKey: "id",
      title: "id",
    },
    {
      width: 300,
      key: "role",
      dataKey: "role",
      title: "role",
      flexGrow: 3,
    },
    {
      width: 150,
      key: "place",
      dataKey: "place",
      title: "place",
    },
    {
      width: 150,
      key: "type",
      dataKey: "type",
      title: "type",
    },
    {
      width: 150,
      key: "status",
      dataKey: "status",
      title: "status",
    },
    {
      width: 150,
      key: "date",
      dataKey: "date",
      title: "date",
      dataGetter: ({ rowData }) =>
        rowData?.date ? format(rowData?.date, "dd/mm/yyyy") : null,
    },
    {
      width: 80,
      key: "date",
      dataKey: "date",
      title: "details",
      frozen: "right",
      align: "center",
      dataGetter: ({ rowData }) => (
        <StyledLink to={`/work-with-us/${rowData.id}`}>
          <Svg color="#737373" name="ChevronLeft" />
        </StyledLink>
      ),
    },
  ];
  const onRowExpand = ({
    expanded,
    rowData,
    rowIndex,
    rowKey,
  }: {
    expanded: boolean;
    rowData: any;
    rowIndex: number;
    rowKey: RowKey;
  }) => {
    const expandedKeys = [...selectedRowKeys];
    const rowIndexK = expandedKeys.indexOf(rowData?.id);
    if (rowIndexK !== -1) {
      expandedKeys.splice(rowIndexK, 1);
    } else {
      expandedKeys.push(rowData.id);
    }
    setSelectedRowKeys(expandedKeys);
  };

  const onExpandedRowsChange = (expandedRowKeys: any[]) => {
    console.log(selectedRowKeys);
  };

  const Row = styled.div`
    padding: 15px;
    background-color: #eee;
    min-height: 400px;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
  `;
  const rowRenderer = ({ rowData, cells, ...rest }: any) => {
    if (rowData.data)
      return (
        <Row {...rest}>
          <Table
            columns={nestedColumns as any}
            data={rowData.data}
            estimatedRowHeight={100}
          />
        </Row>
      );
    return cells;
  };

  return (
    <Flex
      position={"relative"}
      height={800}
      maxHeight={"100%"}
      p={3}
      flexDirection={"column"}
    >
      <Typography variant="title40">Available Jobs</Typography>
      <Flex flex={1} flexBasis={"auto"}>
        <VerticalScrollContainer p={3} flexGrow={1}>
          <GlobalStyle />
          <Table
            expandedRowKeys={selectedRowKeys}
            expandColumnKey={"expand"}
            estimatedRowHeight={50}
            rowHeight={100}
            onRowExpand={onRowExpand}
            rowRenderer={rowRenderer}
            onExpandedRowsChange={onExpandedRowsChange}
            fixed={false}
            columns={columns as any}
            data={jobs}
          />
        </VerticalScrollContainer>
      </Flex>
    </Flex>
  );
};
export default WorkWithUs;
