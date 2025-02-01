import React from "react";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandNodejs,
} from "@tabler/icons-react";
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  SimpleGrid,
} from "@mantine/core";
import classes from "../CSS/BadgeCard.module.css";
import { theme } from "../../theme";

// Define an interface for the icon data
interface IconData {
  icon: any;
  label: string;
}

// List of available icons
const icons: IconData[] = [
  { icon: <IconBrandTypescript size={16} />, label: "Typescript" },
  { icon: <IconBrandReact size={16} />, label: "React" },
  { icon: <IconBrandNextjs size={16} />, label: "Next.js" },
  { icon: <IconBrandNodejs size={16} />, label: "Node.js" },
  { icon: <IconBrandGithub size={16} />, label: "GitHub" },
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
    image: "https://source.unsplash.com/random/600x400?tech=1",
    title: "Portfolio Website",
    description:
      "A modern and fully responsive portfolio showcasing projects and skills.",
    badges: [icons[1], icons[2], icons[4]],
    link: "https://github.com/yourusername/portfolio-website",
  },
  {
    image: "https://source.unsplash.com/random/600x400?tech=2",
    title: "E-Commerce Platform",
    description:
      "An intuitive and interactive platform for managing online stores and transactions.",
    badges: [icons[0], icons[3], icons[4]],
    link: "https://github.com/yourusername/e-commerce-platform",
  },
  {
    image: "https://source.unsplash.com/random/600x400?tech=3",
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot designed to improve customer interactions.",
    badges: [icons[1], icons[0], icons[4]],
    link: "https://github.com/yourusername/ai-chatbot",
  },
  {
    image: "https://source.unsplash.com/random/600x400?tech=4",
    title: "Task Management App",
    description:
      "A task management tool with real-time collaboration features.",
    badges: [icons[2], icons[3], icons[1]],
    link: "https://github.com/yourusername/task-management-app",
  },
  {
    image: "https://source.unsplash.com/random/600x400?tech=5",
    title: "Crypto Tracker",
    description:
      "A cryptocurrency tracking app providing real-time price updates.",
    badges: [icons[3], icons[0], icons[2]],
    link: "https://github.com/yourusername/crypto-tracker",
  },
];

// Define the props for BadgeCard
interface BadgeCardProps {
  project: Project;
}

// BadgeCard component
export function BadgeCard({ project }: BadgeCardProps) {
  return (
    <Card radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={project.image} alt={project.title} height={180} />
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
