import {
  Card,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "../CSS/ActionGrid.module.css";

export function ActionsGrid({ data, title }: { data: any[]; title: string }) {
  const theme = useMantineTheme();

  const items = data.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>{title}</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
