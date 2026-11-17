import type { Metadata } from "next";

export function studioShare(
  path: string,
  title: string,
  description: string,
  image: "top" | "school" | "coaching",
): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `https://ajara.co.jp${path}`;
  const img = `/images/studio/ogp-${image}.jpg`;
  return {
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ja_JP",
      url,
      siteName: "AJARA Studio",
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}
