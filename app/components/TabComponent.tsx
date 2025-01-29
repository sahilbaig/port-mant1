"use client";

import { Tabs, Transition } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";
import CardComponent from "./CardComponents";

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
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={16} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle size={16} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={16} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Transition
        mounted={activeTab === "gallery"}
        transition="fade"
        duration={500} // Longer duration for smoother transition
        timingFunction="ease-in-out" // Smoother easing function
      >
        {(styles) => (
          <Tabs.Panel
            value="gallery"
            style={{ ...styles, transition: "opacity 0.5s ease-in-out" }}
          >
            Gallery tab content
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
            <CardComponent></CardComponent>
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
            Settings tab content
          </Tabs.Panel>
        )}
      </Transition>
    </Tabs>
  );
}
