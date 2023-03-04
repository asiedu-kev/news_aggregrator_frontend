export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  photo_url: string;
  created: Date;
  updated: Date;
}

export interface Preference {
  id: string;
  category_ids: string[];
  authors: string[];
  sources: string[];
  created: Date;
  updated: Date;
}

export interface Account {
  id: string;
  name: string;
  timezone: string;
  country: string;
  locale: string;
  owner: User;
  created: Date;
  updated: Date;
  role: string;
  status: string;
  preference: Preference;
}
