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
import classes from "./signIn.module.css";
import { useEffect, useState } from "react";
import nookies, { setCookie } from "nookies";
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

    const response = await fetch("/api/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      if (token) {
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        router.push("/");
        toast.success("Logged In");
      }
    } else {
      toast.error("Invalid Credentials");
    }
  };

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back to OmniCare!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor href="/signup" size="sm">
          Create account
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
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
