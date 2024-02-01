import React from "react";
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  rem,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

const Index = ({
  stats,
  label,
  progress,
  color,
  Icon = IconArrowUpRight,
}: {
  stats: string;
  label: string;
  progress: number;
  color: string;
  Icon?: typeof IconArrowUpRight;
}) => {
  return (
    <Paper
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
      withBorder
      radius="md"
      p="xs"
      key={label}
    >
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: progress, color: color }]}
          label={
            <Center>
              <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </Center>
          }
        />

        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {label}
          </Text>
          <Text fw={700} size="xl">
            {stats}
          </Text>
        </div>
      </Group>
    </Paper>
  );
};

export default Index;
