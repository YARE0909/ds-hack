import { useState } from "react";
import { UnstyledButton, Checkbox, Text } from "@mantine/core";
import classes from "./CheckboxCard.module.css";

export function CheckboxCard({
  text,
}: {
  text: string;
}) {
  const [value, onChange] = useState(false);

  return (
    <UnstyledButton onClick={() => onChange(!value)} className={classes.button}>
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: "pointer" } }}
        aria-hidden
      />

      <div>
        <Text fw={500} mb={7} lh={1}>
          {text}
        </Text>
      </div>
    </UnstyledButton>
  );
}
