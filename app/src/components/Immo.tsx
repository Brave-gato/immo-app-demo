import {
  Grid,
  Image,
  Loader,
  LoadingOverlay,
  MantineColor,
} from "@mantine/core";
import { Description } from "./Description";
import { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { DescriptionLoader } from "./DescriptionLoader";

type ImmoProps = {
  id?: string;
};

type Immo = {
  id: string;
  title: string;
  text: string;
  price: string;
  badges?: ReadonlyArray<string>;
  imgSrc: string;
};

type BadgeType = {
  text: string;
  color: MantineColor;
};

export function Immo(props: ImmoProps) {
  const { id } = props;

  const [immo, setImmo] = useState<Immo | null>();
  const [loaderVisible, setLoaderVisible] = useState<boolean>(true);

  useEffect(() => {
    const loadImmo = async () => {
      const results = await fetch(`${baseUrl}/immos/${id}`).then((resp) =>
        resp.json()
      );
      setImmo(results);
      setLoaderVisible(false);
    };

    loadImmo();
  }, [id]);

  function convertBadgeType(
    badges: ReadonlyArray<string>
  ): ReadonlyArray<BadgeType> {
    const newBadges: Array<BadgeType> = [];
    badges.map((badge) => {
      if (badge == "info") newBadges.push({ text: "Info", color: "blue" });
      if (badge == "new") newBadges.push({ text: "New", color: "green" });
    });

    return newBadges;
  }

  return (
    <Grid>
      <Grid.Col span={6} style={{ position: "relative" }}>
        <LoadingOverlay
          visible={loaderVisible}
          loaderProps={{
            children: <Loader color="gray" size={"lg"} type="bars" />,
          }}
        />
        <Image
          src={immo?.imgSrc}
          alt="Product"
          height={200}
          fit="initial"
          fallbackSrc="https://placehold.co/500x200?text=Placeholder"
        />
      </Grid.Col>

      <Grid.Col span={6}>
        {!immo && <DescriptionLoader />}
        {immo && (
          <Description
            title={immo?.title}
            text={immo?.text}
            price={immo?.price}
            badges={immo.badges && convertBadgeType(immo.badges)}
          />
        )}
      </Grid.Col>
    </Grid>
  );
}
