import { Grid, Image } from "@mantine/core";
import { Description } from "./Description";
import { useEffect } from "react";

type ImmoProps = {
  id?: string;
};

export function Immo(props: ImmoProps) {
  const { id } = props;

  useEffect(() => {}, []);

  return (
    <Grid>
      <Grid.Col span={6}>
        <Image
          src="https://via.placeholder.com/500x200"
          alt="Product"
          height={200}
          fit="initial"
        />
      </Grid.Col>

      <Grid.Col span={6}>
        <Description
          title="Mon titre"
          text="Mon texte"
          price="200"
          badges={[
            { text: "New", color: "green" },
            { text: "Eco", color: "green" },
          ]}
        />
      </Grid.Col>
    </Grid>
  );
}
