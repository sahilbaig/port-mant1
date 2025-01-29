"use client";

import {
  IconCookie,
  IconGauge,
  IconUser,
  IconBrandGithub,
} from "@tabler/icons-react";
import {
  Card,
  Container,
  SimpleGrid,
  Text,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import classes from "../CSS/Cards.module.css";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees ",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
];

export default function CardComponent() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>

      {/* GitHub Icon Button */}
      <ActionIcon
        component="a"
        href="https://github.com"
        target="_blank"
        size="lg"
        radius="xl"
        variant="filled"
        color={theme.colors.blue[6]}
        mt="md"
      >
        <IconBrandGithub size={24} />
      </ActionIcon>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
