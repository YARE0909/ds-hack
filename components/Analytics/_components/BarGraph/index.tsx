import { BarChart } from "@mantine/charts";
import { Paper, Text } from "@mantine/core";

interface ChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

export default function Demo({
  data,
  dataKey,
  color,
}: {
  data: any;
  dataKey: string;
  color: string;
}) {
  console.log({ data });
  return (
    <BarChart
      h={300}
      data={data}
      dataKey={dataKey}
      tickLine="x"
      series={[{ name: "count", color}]}
      tooltipProps={{
        content: ({ label, payload }) => (
          <ChartTooltip label={label} payload={payload} />
        ),
      }}
    />
  );
}
