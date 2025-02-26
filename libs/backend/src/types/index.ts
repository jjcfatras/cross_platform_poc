// Types for album objects
export type Album = {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

// Types for the album data response
export type AlbumData = {
  href: string;
  items: Album[];
  limit: number;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
};

// Types for artist objects
export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

// Types for auth cache
export type AuthCache = {
  data: AuthReponse;
  duration: number | undefined;
  fetchTime: number;
};

// Types for auth api response
export type AuthReponse = {
  access_token: string;
  expires_in: number;
  token_type: "Bearer";
};

// Types for external URLs
export type ExternalUrls = {
  spotify: string;
};

// Types for image objects
export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};
