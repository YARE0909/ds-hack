import { Text } from "@mantine/core";
import classes from "./GroupedStats.module.css";

const data = [
  {
    title: "Improved Accuracy Lab Result Trends",
    stats: "17%",
    description:
      "Trends and patterns in laboratory test results overtime for individual patients and groups of patients",
  },
  {
    title: "Satisfied Patients",
    stats: "94%",
    description: "13% more compared to last month",
  },
  {
    title: "Occupancy Rate",
    stats: "45%",
    description: "3% more compared to last monthff",
  },
];

export default function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
