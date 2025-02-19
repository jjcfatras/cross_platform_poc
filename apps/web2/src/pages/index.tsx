import useSWR from "swr";

import { getArtistAlbums, getAuthToken } from "~/libs/backend/src/services";
import { Card, Container, Grid, Screen, Text } from "~/libs/ui/src/components";

export default function Index() {
  const { data: tokenData } = useSWR("/api/token", getAuthToken);
  const { data: albumData } = useSWR(
    tokenData
      ? {
          artistId: "3WrFJ7ztbogyGnTHbHJFl2",
          authToken: tokenData?.access_token,
          tokenType: tokenData?.token_type,
          url: "/artist/:id/album",
        }
      : null,
    getArtistAlbums,
  );

  console.log(JSON.stringify({ tokenData }, null, "\t"));
  console.log(JSON.stringify({ albumData }, null, "\t"));

  return (
    <Screen hasHeader>
      <Container>
        <Grid>
          {Array.from({ length: 20 }, (_, index) => (
            <Card key={index}>
              <Card.Title>Hello World</Card.Title>
              <Card.SubTitle>Hello World</Card.SubTitle>
              <Card.Divider />
              <Card.Body>
                <Text>Body text goes here</Text>
              </Card.Body>
            </Card>
          ))}
        </Grid>
      </Container>
    </Screen>
  );
}
