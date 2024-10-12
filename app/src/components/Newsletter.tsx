import { Box, Button, Grid, Text, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { baseUrl } from "../config";

export function Newsletter() {
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
    fetch(`${baseUrl}/newsletterForm`, requestOptions).then((response) =>
      response.json()
    );
  }, [submittedValues]);

  return (
    <Box mt="xl" mb="xl">
      <Text size="lg" ta="center">
        Follow the latest trends
      </Text>
      <Text size="sm" ta="center" color="dimmed" mb="md">
        With our daily newsletter
      </Text>
      <form onSubmit={form.onSubmit(setSubmittedValues)}>
        <Grid justify="center">
          <Grid.Col span={6}>
            <TextInput
              {...form.getInputProps("email")}
              placeholder="you@example.com"
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <Button fullWidth color="black" type="submit">
              Submit
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
}
