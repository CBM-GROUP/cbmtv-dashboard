export interface Content {
  id: string;
  title: string;
  content_type: string;
  category?: ContentCategory | null;
  format?: ContentFormat | null;
  genres?: number[];
  channel: number;
  description: string;
  // Nullable/empty in the API: saved preview records may not have media yet.
  trailer_link: string | null;
  streaming_link: string | null;
  thumbnail: string | null;
  director: string;
  writer: string;
  genre: string;
  country: string;
  status: string;
  size: string | null;
  duration: string | null;
  is_featured?: boolean;
  is_trending?: boolean;
}

export type ContentCategory = "movies" | "tv_shows" | "documentaries" | "animations";
export type ContentFormat = "standalone" | "series";

export interface CategoryOption { id: ContentCategory; label: string }

export interface Genre {
  id: number;
  name: string;
  description: string;
  categories: ContentCategory[];
  parent: number | null;
  is_active: boolean;
  used_count: number;
}

/**
 * What the API accepts on write. `size` and `duration` are nullable on the
 * model. New video sizes are exact decimal bytes; duration is decimal seconds.
 * Omitted asset metadata preserves existing values on PATCH.
 */
export type ContentPayload = Omit<Content, "id" | "status" | "size" | "duration"> & {
  status?: string;
  size?: string | null;
  duration?: string | null;
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
  show_in_hero?: boolean;
  hero_order?: number;
}

export interface Episode {
  id: string;
  title: string;
  miniseries_no: number;
  streaming_link: string;
  duration: string;
  thumbnail: string;
}
