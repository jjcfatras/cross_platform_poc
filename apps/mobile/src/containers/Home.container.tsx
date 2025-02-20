import { View } from "react-native";
import useSWR from "swr";

import { getArtistAlbums, getAuthToken } from "~/libs/backend/src/services";
import { Spinner } from "~/libs/ui/src/components";

import { HomeComponent } from "../component/Home.component";

export const HomeContainer = () => {
  const { data: tokenData, isLoading: isTokenLoading } = useSWR(
    "/api/token",
    getAuthToken,
  );
  const { data: albumData, isLoading: isDataLoading } = useSWR(
    tokenData
      ? {
          artistId: "3WrFJ7ztbogyGnTHbHJFl2",
          authToken: tokenData?.access_token,
          tokenType: tokenData?.token_type,
        }
      : null,
    getArtistAlbums,
  );

  console.log(JSON.stringify({ token: tokenData?.access_token }, null, "\t"));
  console.log(JSON.stringify({ albums: albumData?.items }, null, "\t"));

  while (isTokenLoading || isDataLoading) {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Spinner />
      </View>
    );
  }

  return <HomeComponent items={albumData?.items || []} />;
};
