export interface Content {
  id: string;
  title: string;
  content_type: string;
  channel: number;
  description: string;
  trailer_link: string;
  streaming_link: string;
  thumbnail: string;
  director: string;
  writer: string;
  genre: string;
  country: string;
  status: string;
  size: string;
  duration: string;
}

/**
 * What the API accepts on write. `size` and `duration` are nullable on the
 * model, and a blank form field must clear them rather than store "0".
 */
export type ContentPayload = Omit<Content, "id" | "size" | "duration"> & {
  size: string | null;
  duration: string | null;
};

export interface Channel {
  id: string;
  name: string;
  description: string;
  // Nullable in the API: both default to null until an editor uploads one.
  // Declaring these as plain `string` hid a next/image crash on null src.
  logo_url: string | null;
  cover_image_url: string | null;
}

export interface Advert {
  id: string;
  advert_type: string;
  advert_name: string;
  advert_description: string;
  advert_link: string;
  stream_link: string;
  advert_thumbnail: string;
}

export interface Episode {
  id: string;
  title: string;
  miniseries_no: number;
  streaming_link: string;
  duration: string;
  thumbnail: string;
}
