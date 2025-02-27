"use client";

import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { SolitoImage } from "solito/image";

import type { AlbumData } from "~/libs/backend/src/types";
import { Card, Grid } from "~/libs/ui/src/components";

type HomeComponentProps = Pick<AlbumData, "items">;

export const HomeComponent = ({ items }: HomeComponentProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <Grid>
      {items.map((album) => (
        <Card key={album.name}>
          <Card.Title>{album.name}</Card.Title>
          <Card.Divider />
          <Card.Body>
            {album.images[1]?.url && (
              <View style={styles.albumArt}>
                <SolitoImage
                  alt={album.name}
                  height={200}
                  src={album.images[1].url}
                  unoptimized
                  width={200}
                />
              </View>
            )}
          </Card.Body>
        </Card>
      ))}
    </Grid>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  albumArt: {
    borderColor: theme.colors.brand,
    borderWidth: 2,
  },
}));
