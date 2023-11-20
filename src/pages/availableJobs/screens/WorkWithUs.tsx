import { format } from "date-fns";
import {
  Card,
  ColumnShape,
  Flex,
  StyledLink,
  Table,
  Typography,
} from "../../../_shared/UI";
import { PageLayout } from "../../../_shared/layouts/PageLayout";
import Svg from "./../../../_shared/styledComponents/Svg";

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
    summary:
      "The client is seeking a skilled Engineering Manager with a hands-on approach and a strong focus on front-end development. The ideal candidate will have a passion for leading exceptional teams to deliver web-based solutions, including consumer-facing websites, eCommerce sites, UI web components, and robust UI infrastructure. As an expert in technology, you will collaborate closely with internal stakeholders and high-profile customers to develop technical strategies. In addition, you will oversee diverse engineering teams responsible for delivering complex projects with high value. To succeed in this role, you must be highly motivated, collaborative, and adaptable in a fast-paced, evolving environment. We seek a leader and team player who inspires innovation, drives positive change, holds high standards for themselves and others, enjoys working with talented teams, and has a sense of humor.",
  },
  {
    id: "2",
    role: "IT CLoud Developer",
    type: "Full Time",
    place: "Remote",
    status: "AVAILABLE",
    date: 1700513210049,
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
    id: "3",
    role: "Back End Web Developer",
    type: "Full Time",
    place: "Remote",
    status: "AVAILABLE",
    date: 1700510010049,
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
const columns: Column[] = [
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
    dataGetter: ({ rowData }) => format(rowData.date, "dd/mm/yyyy"),
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
const WorkWithUs = () => {
  return (
    <PageLayout>
      <Flex fullSize justifyContent={"center"} alignItems={"center"} p={3}>
        <Typography variant="title40">Available Jobs</Typography>
        <Flex
          p={3}
          flexDirection={"row"}
          style={{ gap: "20px 20px ", flexWrap: "wrap" }}
          maxWidth={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          fullSize
        >
          <Card width={"100%"} height={"100%"} minHeight={400}>
            <Table fixed columns={columns as any} data={jobs} />
          </Card>
        </Flex>
      </Flex>
    </PageLayout>
  );
};
export default WorkWithUs;
