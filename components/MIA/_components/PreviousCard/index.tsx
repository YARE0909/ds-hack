import { Card, Image, Avatar, Text, Group } from "@mantine/core";
import classes from "./PreviousCard.module.css";

export function ArticleCardVertical({
  type,
  tool,
  doctor,
  src,
}: {
  type: string;
  tool: string;
  doctor: string;
  src: string;
}) {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <Image
            src={src}
            height={160}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className={classes.body}
          style={{ width: "60%", padding: "var(--mantine-spacing-md)" }}
        >
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {type}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {tool}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">{doctor}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
