import dayjs from "dayjs";
import type { Metadata } from "next";
import type { Person, ProfilePage, WebSite, WithContext } from "schema-dts";

import { SEO, SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

export function getSiteUrl(): string {
  return SITE_INFO.url.replace(/\/$/, "");
}

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

const openGraphImages = [
  {
    url: SITE_INFO.ogImage,
    alt: SEO.ogImageAlt,
  },
];

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: SEO.titleTemplate,
    default: SEO.defaultTitle,
  },
  description: SEO.defaultDescription,
  keywords: SEO.keywords,
  authors: [{ name: USER.displayName, url: getSiteUrl() }],
  creator: USER.displayName,
  publisher: USER.displayName,
  applicationName: SITE_INFO.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    url: "/",
    siteName: SITE_INFO.name,
    locale: SEO.locale,
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: openGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    creator: SEO.twitterHandle,
    site: SEO.twitterHandle,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon.ico",
        sizes: "any",
      },
      {
        url: "/assets/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/assets/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

type PageMetadataOptions = {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = SEO.defaultDescription,
  path,
  ogImage = SITE_INFO.ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_INFO.name,
      locale: SEO.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: SEO.twitterHandle,
      images: [ogImage],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {
          robots: {
            index: true,
            follow: true,
          },
        }),
  };
}

function getPersonSameAs(): string[] {
  const socialUrls = SOCIAL_LINKS.map((link) => link.href);
  return [...new Set([USER.website, ...USER.otherWebsites, ...socialUrls])];
}

export function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    alternateName: [USER.username, `${USER.firstName} ${USER.lastName}`],
    url: getSiteUrl(),
    description: SEO.defaultDescription,
    inLanguage: SEO.language,
    author: {
      "@type": "Person",
      name: USER.displayName,
      url: getSiteUrl(),
    },
  };
}

export function getProfilePageJsonLd(): WithContext<ProfilePage> {
  const person: Person = {
    "@type": "Person",
    name: USER.displayName,
    alternateName: `${USER.firstName} ${USER.lastName}`,
    identifier: USER.username,
    url: getSiteUrl(),
    image: toAbsoluteUrl(USER.avatar),
    jobTitle: USER.jobTitle,
    description: SEO.defaultDescription,
    knowsAbout: SEO.knowsAbout,
    sameAs: getPersonSameAs(),
    worksFor: USER.jobs.map((job) => ({
      "@type": "Organization",
      name: job.company,
      ...(job.website ? { url: job.website } : {}),
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hanoi",
      addressCountry: "VN",
    },
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: SEO.defaultTitle,
    description: SEO.defaultDescription,
    url: getSiteUrl(),
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    inLanguage: SEO.language,
    mainEntity: person,
  };
}
