import axios from "axios";

const CLIENT_ID = "ef46c9089dd44794b9ec7132de3cfc64";
const CLIENT_SECRET = "aa27431b924e4ca19674ec747418b45d";

type AuthReponseProps = {
  access_token: string;
  expires_in: number;
  token_type: "Bearer";
};

const API_BUFFER = 5;

const isNumber = (arg: unknown): arg is number => typeof arg === "number";

export const isTokenExpired = ({
  tokenDuration,
  tokenFetchTime,
}: {
  tokenDuration: number | undefined;
  tokenFetchTime: number | undefined;
}) =>
  isNumber(tokenFetchTime) &&
  isNumber(tokenDuration) &&
  Math.abs(Date.now() - tokenFetchTime) >= (tokenDuration - API_BUFFER) * 1000;

type AuthCacheProps = {
  data: AuthReponseProps;
  duration: number | undefined;
  fetchTime: number;
};

const _authCache = new Map<string, AuthCacheProps>();

export const getAuthToken = async () => {
  const _authData = _authCache.get(CLIENT_ID);

  if (
    !_authData ||
    isTokenExpired({
      tokenDuration: _authData.duration,
      tokenFetchTime: _authData.fetchTime,
    })
  ) {
    const { data } = await axios.post<AuthReponseProps>(
      "https://accounts.spotify.com/api/token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    _authCache.set(CLIENT_ID, {
      data,
      duration: data.expires_in,
      fetchTime: Date.now(),
    });

    return data;
  }
  return _authData.data;
};

type getArtistAlbumsProps = {
  artistId: string | undefined;
  authToken: string | undefined;
  tokenType: "Bearer" | undefined;
};

export const getArtistAlbums = async ({
  artistId,
  authToken,
  tokenType,
}: getArtistAlbumsProps) => {
  if (!artistId || !authToken || !tokenType) {
    return null;
  }
  const { data } = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        Authorization: `${tokenType} ${authToken}`,
      },
    },
  );

  return data;
};
