"use client";

import { Tabs, Transition } from "@mantine/core";
import About from "./About";
import TimelineComponent from "./Timeline";
import ContactUs from "./Contact";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";
import ProjectsGrid from "./BadgeCards";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState<string | null>("gallery");

  return (
    <Tabs
      color="yellow"
      variant="pills"
      radius="lg"
      value={activeTab}
      onChange={(val) => setActiveTab(val)}
    >
      <Tabs.List
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={16} />}>
          About
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle size={16} />}
        >
          Projects
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={16} />}>
          Experience
        </Tabs.Tab>

        <Tabs.Tab value="contact" leftSection={<IconSettings size={16} />}>
          Contact
        </Tabs.Tab>
      </Tabs.List>

      <Transition
        mounted={activeTab === "gallery"}
        transition="fade"
        duration={500} // Longer duration for smoother transition
        timingFunction="ease-in-out" // Smoother easing function,
      >
        {(styles) => (
          <Tabs.Panel
            value="gallery"
            style={{ ...styles, transition: "opacity 0.5s ease-in-out" }}
          >
            <About></About>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={activeTab === "messages"}
        transition="fade"
        duration={500} // Longer duration for smoother transition
        timingFunction="ease-in-out" // Smoother easing function
      >
        {(styles) => (
          <Tabs.Panel
            value="messages"
            style={{ ...styles, transition: "opacity 0.5s ease-in-out" }}
          >
            <ProjectsGrid></ProjectsGrid>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={activeTab === "settings"}
        transition="fade"
        duration={500} // Longer duration for smoother transition
        timingFunction="ease-in-out" // Smoother easing function
      >
        {(styles) => (
          <Tabs.Panel
            value="settings"
            style={{ ...styles, transition: "opacity 0.5s ease-in-out" }}
          >
            <TimelineComponent />
          </Tabs.Panel>
        )}
      </Transition>
      <Transition
        mounted={activeTab === "contact"}
        transition="fade"
        duration={500} // Longer duration for smoother transition
        timingFunction="ease-in-out" // Smoother easing function
      >
        {(styles) => (
          <Tabs.Panel
            value="contact"
            style={{ ...styles, transition: "opacity 0.5s ease-in-out" }}
          >
            <ContactUs />
          </Tabs.Panel>
        )}
      </Transition>
    </Tabs>
  );
}
