import {
  IconHeart,
  IconBrandGithub,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandNodejs,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  SimpleGrid,
} from "@mantine/core";
import classes from "../CSS/BadgeCard.module.css";

// List of available icons
const icons = [
  { icon: <IconBrandTypescript size={16} />, label: "Typescript" },
  { icon: <IconBrandReact size={16} />, label: "React" },
  { icon: <IconBrandNextjs size={16} />, label: "Next.js" },
  { icon: <IconBrandNodejs size={16} />, label: "Node.js" },
  { icon: <IconBrandGithub size={16} />, label: "GitHub" },
];

// Mock project data array
const mockProjects = [
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

// BadgeCard component
function BadgeCard({ project }) {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={project.image} alt={project.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {project.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
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
