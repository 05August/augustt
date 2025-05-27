import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import type { WebSite, WithContext } from "schema-dts";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: `${USER.displayName} - Just another clown`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "ncdai",
      url: SITE_INFO.url,
    },
  ],
  creator: "ncdai",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iamaugustt", // Twitter username
    images: [SITE_INFO.ogImage],
  },
  // icons: {
  //   icon: [
  //     {
  //       url: "https://assets.chanhdai.com/images/favicon.ico",
  //       sizes: "any",
  //     },
  //     {
  //       url: "https://assets.chanhdai.com/images/favicon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  //   apple: {
  //     url: "https://assets.chanhdai.com/images/apple-touch-icon.png",
  //     type: "image/png",
  //     sizes: "180x180",
  //   },
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Thanks @shadcn-ui, @tailwindcss */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage['chanhdai.theme'] === 'dark' || ((!('chanhdai.theme' in localStorage) || localStorage['chanhdai.theme'] === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}

              try {
                if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
                  document.documentElement.classList.add('os-macos')
                }
              } catch (_) {}
            `,
          }}
        />
        <script type="application/ld+json">
          {JSON.stringify(getWebSiteJsonLd())}
        </script>
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
