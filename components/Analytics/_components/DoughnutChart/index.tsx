import { DonutChart } from "@mantine/charts";

export default function Demo({ data }: { data: any }) {
  console.log({ data });
  return <DonutChart data={data} />;
}
