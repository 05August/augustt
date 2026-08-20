import { HomePageDeferred } from "@/components/home-page-deferred";
import { SiteFooter } from "@/components/site-footer";
import { VIETNAM_HOLIDAYS } from "@/config/site";
import { USER } from "@/data/user";
import { About } from "@/features/profile/components/about";
import { Certifications } from "@/features/profile/components/certifications";
// import { Awards } from "@/features/profile/components/awards";
// import { Blog } from "@/features/profile/components/blog";
// import { Certifications } from "@/features/profile/components/certifications";
import { Experiences } from "@/features/profile/components/experiences";
import { Header } from "@/features/profile/components/header";
import { Logo } from "@/features/profile/components/logo";
import { Overview } from "@/features/profile/components/overview";
import { Projects } from "@/features/profile/components/projects";
import { SiteHeader } from "@/features/profile/components/site-header";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { cn } from "@/lib/cn";
import { getProfilePageJsonLd } from "@/lib/seo";

export default function Page() {
  const profileJsonLd = getProfilePageJsonLd();

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(profileJsonLd)}
      </script>

      <SiteHeader />

      <main className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-4xl">
          <Header />
          <Pattern />

          <Overview />
          <Pattern />

          <SocialLinks />
          <Pattern />

          <About />
          <Pattern />

          <TeckStack />
          <Pattern />
          {/* 
          <Blog />
          <Pattern /> */}

          <Experiences />
          <Pattern />

          <Projects />
          <Pattern />
          {/* 
          <Awards />
          <Pattern /> */}

          <Certifications />
          <Pattern />

          <Logo />
          <Pattern />

          <SiteFooter />
        </div>
      </main>

      {/* <QuickActions /> */}

      <HomePageDeferred
        confettiDates={[USER.dateOfBirth, ...VIETNAM_HOLIDAYS]}
      />
    </>
  );
}

function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
