import { Container, Group, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import UserList from "./_components/UserList";
import FeaturesCards from "./_components/Card/Card";

const Index = () => {
  return (
    <Container
      fluid
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <Text fw="bold" style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        Dashboard
      </Text>
      <Group style={{ flex: 1, display: "flex", alignItems: "start" }}>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          style={{
            flex: 1,
            padding: "1rem",
            height: "100%",
          }}
        >
          <FeaturesCards
            title="Patient Records"
            description="View Patient records"
            icon="archive"
            color={""}
          />
          <FeaturesCards
            title="Lab Results"
            description="View Lab Results"
            icon="microscope"
            color={""}
          />
          <FeaturesCards
            title="Organ Donation Registry"
            description="Check Organ Donation Registry"
            icon="heart"
            color={""}
          />
          <FeaturesCards
            title="Clinical Desicion Support System"
            description="Consult with AI"
            icon="robot"
            color={""}
          />
        </SimpleGrid>
        <Group
          style={{
            flex: "0 0 30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Text fz={25} fw={700}>
            Staff
          </Text>
          <UserList />
        </Group>
      </Group>
    </Container>
  );
};

export default Index;
