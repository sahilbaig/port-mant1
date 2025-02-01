import { useState } from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Loader,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "../CSS/ContactUs.module.css";

const socialLinks = [
  { icon: IconBrandLinkedin, link: "https://www.linkedin.com/in/sahilbaig/" },
  { icon: IconBrandGithub, link: "https://github.com/sahilbaig" },
];

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSendMessage = async () => {
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
          <Title className={classes.title}>Contact Me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and I will get back to you within 24 hours.
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            label="Your message"
            placeholder="Write something..."
            minRows={4}
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Group justify="flex-end" mt="md">
            <Button
              className={classes.control}
              onClick={handleSendMessage}
              disabled={loading}
            >
              {loading ? <Loader size="sm" color="white" /> : "Send message"}
            </Button>
          </Group>

          {responseMessage && (
            <Text
              mt="md"
              color={responseMessage.startsWith("✅") ? "green" : "red"}
            >
              {responseMessage}
            </Text>
          )}
        </div>
      </SimpleGrid>
    </div>
  );
}
