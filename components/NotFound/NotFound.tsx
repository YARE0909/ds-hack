import { Container, Title, Text, Button, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import image from "../../public/assets/NotFoundAsset.svg";
import classes from "./NotFound.module.css";
import { useRouter } from "next/router";

export default function NotFoundImage() {
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src={"/assets/NotFoundAsset.svg"}
          alt=""
          className={classes.mobileImage}
          width={250}
          height={200}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() => router.push("/")}
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src={"/assets/NotFoundAsset.svg"}
          alt=""
          className={classes.desktopImage}
          width={300}
          height={200}
        />
      </SimpleGrid>
    </Container>
  );
}
