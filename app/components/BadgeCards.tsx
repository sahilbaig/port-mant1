import React from "react";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandFlutter,
  IconBrandTerraform,
  IconBrandAws,
} from "@tabler/icons-react";
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import classes from "../CSS/BadgeCard.module.css";

// Define an interface for the icon data
interface IconData {
  icon: any;
  label: string;
}

// List of available icons
const icons: IconData[] = [
  { icon: <IconBrandTypescript size={16} />, label: "Typescript" }, //0
  { icon: <IconBrandReact size={16} />, label: "React" }, //1
  { icon: <IconBrandNextjs size={16} />, label: "Next.js" }, //2
  { icon: <IconBrandNodejs size={16} />, label: "Node.js" }, //3
  { icon: <IconBrandGithub size={16} />, label: "GitHub" }, //4
  { icon: <IconBrandFlutter size={16} />, label: "Flutter" }, //5
  { icon: <IconBrandTerraform size={16} />, label: "Terraform" }, //6
  { icon: <IconBrandAws size={16} />, label: "AWS" }, //7
];

// Define an interface for a project
export interface Project {
  image: string;
  title: string;
  description: string;
  badges: IconData[];
  link: string;
}

// Mock project data array
const mockProjects: Project[] = [
  {
    image: "/ec2.png",
    title: "Automated EC2 Deployment",
    description:
      "Automated EC2 Deployment Pipeline with Terraform & GitHub Actions",
    badges: [icons[7], icons[6], icons[4]],
    link: "https://github.com/sahilbaig/ec2-testing-lab",
  },

  {
    image: "/notion.png",
    title: "Notion Inspired Google Docs Alternative",
    description:
      "Developed full-stack document editor with Next.js, Node.js, MongoDB",
    badges: [icons[0], icons[1], icons[2]],
    link: "https://github.com/sahilbaig/gword-frontend",
  },

  {
    image: "/gsheet.png",
    title: "Gsheets Clone",
    description:
      "Built spreadsheet application with React, Next.js, Typescript , Material UI, Redux",
    badges: [icons[0], icons[1]],
    link: "https://gsheets-nu.vercel.app/",
  },

  {
    image: "/slack.png",
    title: "Slack Approval Bot",
    description:
      "A Node.js Slack bot that manages approval requests with interactive Approve/Reject buttons.",
    badges: [icons[3]],
    link: "https://github.com/sahilbaig/slack-approval-bot",
  },

  {
    image: "/portfolio-img.png",
    title: "Portfolio Website",
    description:
      "A modern and fully responsive portfolio showcasing projects and skills.",
    badges: [icons[0], icons[2]],
    link: "https://github.com/sahilbaig/port-mant1",
  },
  {
    image: "/email.jpg",
    title: "Automated Email Reply System",
    description: "An automated email reply system built with Node.js ",
    badges: [icons[3], icons[4]],
    link: "https://github.com/sahilbaig/ListedApp",
  },
  {
    image: "/wordle.jpg",
    title: "Infinite Wordle",
    description: "An infinite cross-platform clone of Wordle made in Flutter ",
    badges: [icons[5]],
    link: "https://github.com/sahilbaig/free-wordle-final",
  },
];

// Define the props for BadgeCard
interface BadgeCardProps {
  project: Project;
}

// BadgeCard component
export function BadgeCard({ project }: BadgeCardProps) {
  const theme = useMantineTheme();

  return (
    <Card radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "180px",
            // or 'contain' depending on your needs
          }}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500} style={{ color: "white" }}>
            {project.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs" style={{ color: "white" }}>
          {project.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Technologies Used
        </Text>
        <Group gap={7} mt={7}>
          {project.badges.map((badge, index) => (
            <Badge
              variant="light"
              size="md"
              key={index}
              leftSection={badge.icon}
              color="white"
            >
              {badge.label}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          radius="md"
          style={{ flex: 1 }}
          component="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          color={theme.colors.purple[1]}
        >
          More Details
        </Button>
      </Group>
    </Card>
  );
}

// Main component that maps over mockProjects
export default function ProjectsGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
      {mockProjects.map((project, index) => (
        <BadgeCard key={index} project={project} />
      ))}
    </SimpleGrid>
  );
}
