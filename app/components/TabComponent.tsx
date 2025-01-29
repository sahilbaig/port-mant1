"use client";

import { Tabs, Transition } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";

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
        duration={300}
        timingFunction="ease-out"
      >
        {(styles) => (
          <Tabs.Panel value="gallery" style={styles}>
            Gallery tab content
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={activeTab === "messages"}
        transition="fade"
        duration={300}
        timingFunction="ease-out"
      >
        {(styles) => (
          <Tabs.Panel value="messages" style={styles}>
            Messages tab content
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={activeTab === "settings"}
        transition="fade"
        duration={300}
        timingFunction="ease-out"
      >
        {(styles) => (
          <Tabs.Panel value="settings" style={styles}>
            Settings tab content
          </Tabs.Panel>
        )}
      </Transition>
    </Tabs>
  );
}
