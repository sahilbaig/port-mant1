import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "../CSS/ContactUs.module.css";
const socialLinks = [
  { icon: IconBrandTwitter, link: "https://twitter.com" },
  { icon: IconBrandYoutube, link: "https://youtube.com" },
  { icon: IconBrandInstagram, link: "https://instagram.com" },
];

export default function ContactUs() {
  const socialIcons = socialLinks.map(({ icon: Icon, link }, index) => (
    <ActionIcon
      key={index}
      size={36}
      component="a"
      href={link}
      target="_blank"
      className={classes.social}
      variant="subtle"
    >
      <Icon size={24} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={50}
        style={{ alignItems: "start" }}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours.
          </Text>

          <ContactIconsList />

          <Group mt="xl">{socialIcons}</Group>
        </div>

        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button
              className={classes.control}
              onClick={() => {
                console.log("Me so clicked");
              }}
            >
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
