import axios from "axios";

import { isNumber } from "~/libs/utils/src/helpers";

import { API_BUFFER, CLIENT_ID, CLIENT_SECRET } from "../constants";
import type { AlbumData } from "../types";

type AuthCache = {
  data: AuthReponse;
  duration: number | undefined;
  fetchTime: number;
};

type AuthReponse = {
  access_token: string;
  expires_in: number;
  token_type: "Bearer";
};

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

const _authCache = new Map<string, AuthCache>();

export const getAuthToken = async () => {
  const _authData = _authCache.get(CLIENT_ID);

  if (
    !_authData ||
    isTokenExpired({
      tokenDuration: _authData.duration,
      tokenFetchTime: _authData.fetchTime,
    })
  ) {
    const { data } = await axios.post<AuthReponse>(
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
  const { data } = await axios.get<AlbumData>(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        Authorization: `${tokenType} ${authToken}`,
      },
    },
  );

  return data;
};
