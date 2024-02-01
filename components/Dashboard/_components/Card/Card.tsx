import { Text, Card, rem, useMantineTheme } from "@mantine/core";
import {
  IconUser,
  IconCookie,
  IconArchive,
  IconMicroscope,
  IconHeart,
  IconRobot,
} from "@tabler/icons-react";
import classes from "./Card.module.css";

export default function FeaturesCards({
  title,
  description,
  icon,
  color
}: {
  title: string;
  description: string;
  icon: any;
  color: string;
}) {
  const theme = useMantineTheme();
  const IconComponent = determineIcon(icon);

  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      {IconComponent && (
        <IconComponent
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
      )}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
}

function determineIcon(icon: string) {
  switch (icon) {
    case "archive":
      return IconArchive;
    case "microscope":
      return IconMicroscope;
    case "heart":
      return IconHeart;
    case "robot":
      return IconRobot;
    default:
      return null;
  }
}
