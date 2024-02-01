import { Container, Group, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import StatCardPrimary from "./_components/StatCardPrimary";
import GroupedStats from "./_components/GroupedStats";
import BarGraph from "./_components/BarGraph";
import DoughnutChart from "./_components/DoughnutChart";

const Index = ({
  ageDistribution,
  genderDistribution,
  medicalCondition,
}: {
  ageDistribution: any;
  genderDistribution: any;
  medicalCondition: any;
}) => {
  console.log({ medicalCondition });
  return (
    <Container
      fluid
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <Text fw="bold" style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        Analytics
      </Text>
      <GroupedStats />
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3, lg: 3 }}
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text fw={700}>Patient Age Distribution</Text>
          <BarGraph data={ageDistribution} dataKey={"age"} color="blue" />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text fw={700}>Patient Gender Distribution</Text>
          <BarGraph
            data={genderDistribution}
            dataKey={"gender"}
            color="grape"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text fw={700}>Prevalence Of Medical Conditions</Text>
          <BarGraph data={medicalCondition} dataKey={"name"} color="green" />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
