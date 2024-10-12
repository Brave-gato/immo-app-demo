import { Box, Button, Textarea, TextInput, Title } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { baseUrl } from "../config";

export function Form() {
  const form = useForm({
    mode: "controlled",
    validate: {
      email: isEmail("Invalid email"),
    },
  });
  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submittedValues),
    };
    fetch(`${baseUrl}/contactForm`, requestOptions).then((response) =>
      response.json()
    );
  }, [submittedValues]);

  return (
    <Box mt="xl">
      <Title order={3}>Get in touch</Title>
      <Box
        bd="1px solid gray.5"
        px="20px"
        pb="20px"
        style={{ "border-radius": "10px" }}
        mt="25"
      >
        <form onSubmit={form.onSubmit(setSubmittedValues)}>
          <TextInput
            {...form.getInputProps("name")}
            label="Name"
            placeholder="Value"
            required
            mt="md"
          />
          <TextInput
            {...form.getInputProps("surname")}
            label="Surname"
            placeholder="Value"
            required
            mt="md"
          />
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Value"
            required
            mt="md"
          />
          <Textarea
            {...form.getInputProps("message")}
            label="Message"
            placeholder="Value"
            required
            mt="md"
          />
          <Button fullWidth mt="md" color="gray" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
