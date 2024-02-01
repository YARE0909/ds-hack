import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCalendarDown,
  IconAlertCircle,
  Icon24Hours,
  IconActivity,
  IconChisel,
  IconArticle,
} from "@tabler/icons-react";
import classes from "./Card.module.css";

const mockdata = [
  { title: "Today's Schedule", icon: IconCalendarDown, color: "violet" },
  { title: "Critical Alerts", icon: IconAlertCircle, color: "indigo" },
  { title: "Recent Lab Results", icon: Icon24Hours, color: "blue" },
  { title: "Health Trends Dashboard", icon: IconActivity, color: "green" },
  { title: "Equipment Status", icon: IconChisel, color: "teal" },
  { title: "Patient Feedback Summary", icon: IconArticle, color: "cyan" },
];

export default function ActionsGrid() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
