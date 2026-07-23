import data from "./perspectives.json";

export interface Perspective {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string;
  status: "draft" | "published";
  lang: "fr" | "en" | "ar";
}

export const perspectives: Perspective[] = data as Perspective[];
