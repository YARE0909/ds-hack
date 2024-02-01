import { Avatar, Text, Paper, Group } from "@mantine/core";

export default function UserInfoAction() {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Group
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width: "100%",
          justifyContent: "start",
        }}
      >
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          size={120}
          radius={120}
        />
        <Group
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 0,
          }}
        >
          <Text ta="center" fz="lg" fw={500} mt="md">
            Dr. Ben Dover
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            bendover@me.io
          </Text>
        </Group>
      </Group>
      <Group
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        mt={35}
      >
        <Group
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <Text size="xs" fw={700} c="cyan">
            Date Of Birth
          </Text>
          <Text size="md">01/01/1990</Text>
        </Group>
        <Group
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <Text size="xs" fw={700} c="cyan">
            Status
          </Text>
          <Text c="green" size="md">
            Active
          </Text>
        </Group>
        <Group
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <Text size="xs" fw={700} c="cyan">
            Shift
          </Text>
          <Text size="md">Morning</Text>
        </Group>
      </Group>
    </Paper>
  );
}
