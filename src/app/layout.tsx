import "@/styles/globals.css";

import type { Viewport } from "next";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { getWebSiteJsonLd, rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata;

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
                if (localStorage['augustt.theme'] === 'dark' || ((!('augustt.theme' in localStorage) || localStorage['augustt.theme'] === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
