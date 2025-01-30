"use client";

import { Timeline, Text } from "@mantine/core";
import { IconGitBranch, IconGitCommit } from "@tabler/icons-react";

export default function TimelineComponent() {
  return (
    <div>
      <h1>Education</h1>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<IconGitBranch size={36} />} title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created a new branch{" "}
            <Text variant="link" component="span" inherit>
              feature-update
            </Text>{" "}
            from master
          </Text>
          <Text size="xs" mt={4}>
            1 hour ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commit">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed the first commit to{" "}
            <Text variant="link" component="span" inherit>
              feature-update
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            30 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
