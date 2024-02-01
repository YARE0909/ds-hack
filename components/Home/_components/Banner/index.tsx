import { Text, Title } from "@mantine/core";
import classes from "./Banner.module.css";
import Image from "next/image";

export default function EmailBanner() {
  return (
    <div
      className={classes.wrapper}
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      <div className={classes.body}>
        <Title className={classes.title}>Good Day, Doctor!</Title>
        <Text fw={500} fz="lg" mb={5}>
          Have a nice Monday
        </Text>
      </div>
      <Image 
        src="/assets/Banner.svg"
        width={150}
        height={100}
        alt="Doctor"
      />
    </div>
  );
}
