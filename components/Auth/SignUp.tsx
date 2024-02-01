import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./SignUp.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function AuthenticationTitle() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Enter Credentials");
      return;
    }

    const response = await fetch("/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/signin");
      toast.success("Signed Up! Now Please Log In");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome to OmniCare!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already registered?{" "}
        <Anchor href="/signin" size="sm">
          Log In
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
}
