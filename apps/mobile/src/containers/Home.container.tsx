import { View } from "react-native";

import { Spinner } from "~/libs/ui/src/components";
import { useArtistAlbums, useAuthToken } from "~/libs/utils/src/hooks";

import { HomeComponent } from "../component/Home.component";

export const HomeContainer = () => {
  const { data: tokenData, isLoading: isTokenLoading } = useAuthToken();

  const { data: albumData, isLoading: isDataLoading } = useArtistAlbums({
    accessToken: tokenData?.access_token,
    artistId: "3WrFJ7ztbogyGnTHbHJFl2",
    tokenType: tokenData?.token_type,
  });

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
