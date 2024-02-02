import {
  Card,
  Container,
  Group,
  Loader,
  Text,
  Image,
  Button,
} from "@mantine/core";
import React, { useState } from "react";
import Panel from "./_components/Panel";
import { ArticleCardVertical } from "./_components/PreviousCard";

const previousAnalysis = [
  {
    type: "X Ray",
    tool: "Contrast Enhancement",
    doctor: "Dr. Ben Dover",
    src: "https://cdn.the-scientist.com/assets/articleNo/65914/aImg/32102/lung-scan-article-s.jpg",
  },
  {
    type: "Head CT Scan",
    tool: "Object Detection",
    doctor: "Dr. Ben Dover",
    src: "https://media.sciencephoto.com/image/c0269954/800wm",
  },
  {
    type: "MRI Scan",
    tool: "Classification",
    doctor: "Dr. John Doe",
    src: "https://prod-images-static.radiopaedia.org/images/2122233/c44ec8ef5f50047f28cc8d592dabf1_big_gallery.JPEG",
  },
];

const Index = () => {
  const [result, setResult] = useState<any>(null);
  const [image, setImage] = useState(null);

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
        Medical Image Analysis
      </Text>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "start",
          gap: 20,
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <Group
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            gap: 10,
            width: "50%",
          }}
        >
          <Panel setResult={setResult} setImage={setImage} />
          <Text fz={20} fw={600}>
            Result
          </Text>
          {result !== null && result !== "loading" ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                border: "1px solid #495057",
                padding: "1rem",
                borderRadius: "10px",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <Image
                  style={{
                    borderRadius: "10px",
                  }}
                  src={image}
                  width={200}
                  height={250}
                  alt=""
                />
              </div>
              <div>
                {result.prediction ? (
                  <>
                    <Text fz={15} fw={700} c={"#828282"}>
                      Tumour Detection
                    </Text>
                    <Text fz={20} fw={700}>
                      Tumour Detected
                    </Text>
                  </>
                ) : (
                  <>
                    <Text fz={15} fw={700} c={"#828282"}>
                      Tumour Detection
                    </Text>
                    <Text fz={20} fw={700}>
                      No Tumour Detected
                    </Text>
                  </>
                )}
              </div>
            </div>
          ) : result === "loading" ? (
            <Card
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5rem",
              }}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Loader color="blue" />
            </Card>
          ) : (
            <Card
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5rem",
              }}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Text c="#696969" fw={700}>
                Upload An Image To Get Results
              </Text>
            </Card>
          )}
        </Group>
        <Group
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {previousAnalysis.map((item) => (
              <ArticleCardVertical
                key={item.tool}
                doctor={item.doctor}
                tool={item.tool}
                type={item.type}
                src={item.src}
              />
            ))}
          </div>
        </Group>
      </div>
    </Container>
  );
};

export default Index;
