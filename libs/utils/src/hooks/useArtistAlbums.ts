import useSWR from "swr";

import { getArtistAlbums } from "~/libs/backend/src/services";

type Props = {
  accessToken: string | undefined;
  artistId: string | undefined;
  tokenType: "Bearer" | undefined;
};

export const useArtistAlbums = ({
  accessToken,
  artistId,
  tokenType,
}: Props) => {
  const _isReadyToFetch = accessToken && artistId && tokenType;
  const response = useSWR(
    _isReadyToFetch
      ? {
          artistId: artistId,
          authToken: accessToken,
          tokenType: tokenType,
        }
      : null,
    getArtistAlbums,
  );
  return response;
};
