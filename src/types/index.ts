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

export interface Channel {
  id: string;
  name: string;
  cover_image_url: string;
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
