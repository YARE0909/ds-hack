import React, { useRef } from "react";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./Panel.module.css";
import AI from "../../../../utils/AI";
import toast from "react-hot-toast";

export default function DropzoneButton({
  setResult,
  setImage,
}: {
  setResult: any;
  setImage: any;
}) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  const handleDrop = async (files: File[]) => {
    if (files.length > 0) {
      const imageFile = files[0];
      const formData = new FormData();
      formData.append("file", imageFile);

      try {
        setResult("loading");
        const response = await AI.post("/MIA", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("API response:", response.data);
        setTimeout(() => {
          setResult(response.data);
          setImage(URL.createObjectURL(imageFile));

          toast.success("Image Analysis Successful!");
        }, 1000);
      } catch (error) {
        setResult(null);
        toast.error("Image Analysis Failed!");
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={handleDrop}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                style={{ width: rem(50), height: rem(50) }}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>JPEG or PNG file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload Medical Image</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag&apos;n&apos;drop files here to upload.
          </Text>
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size="md"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}
