import React from "react";
import { Container, Grid, Skeleton } from "@mantine/core";
import Banner from "./_components/Banner";
import Stats from "./_components/Stats";
import UserBanner from "./_components/UserBanner";
import Card from "./_components/Card";

const glanceData = [
  {
    label: "Scheduled Appointments",
    value: "23",
  },
  {
    label: "Appointments Pending",
    value: "15",
  },
  {
    label: "Patients Seen Today",
    value: "69",
  },
  {
    label: "Prescriptions Issued",
    value: "69",
  },
  {
    label: "Lab Results Pending",
    value: "69",
  },
  {
    label: "Upcoming Surgeries",
    value: "69",
  },
];

const colors = [
  "teal",
  "cyan",
  "blue",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "gray",
];

function DynamicGrid() {
  return (
    <Container fluid style={{ width: "100%" }}>
      <Grid gutter="lg" style={{ height: "100%" }}>
        {/* Left Column (65% width on desktop, 100% width on mobile) */}
        <Grid.Col span={{ xs: 12, lg: 8 }} style={{ height: "100%" }}>
          <Grid gutter="md" style={{ height: "100%" }}>
            {/* First Component in the Left Column */}
            <Grid.Col span={12}>
              <Banner />
            </Grid.Col>
            {/* Second Component in the Left Column */}
            <Grid.Col span={12}>
              <Grid gutter="md">
                {/* Dynamic Grid of 4 Components */}
                {glanceData.map((item) => (
                  <Grid.Col span={6} key={item.value}>
                    <Stats
                      stats={item.value}
                      label={item.label}
                      progress={100}
                      color={colors[Math.floor(Math.random() * colors.length)]}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        {/* Right Column (100% width on mobile, 35% width on desktop) */}
        <Grid.Col span={{ xs: 12, lg: 4 }} style={{ height: "100%" }}>
          <Grid gutter="md" style={{ height: "100%" }}>
            {/* First Component in the Right Column */}
            <Grid.Col span={12}>
              <UserBanner />
            </Grid.Col>
            {/* Second Component in the Right Column */}
            <Grid.Col span={12}>
              <Card />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default DynamicGrid;
