import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { TwoColumnHeroWithImage } from "@/components/heros/two-column-hero-with-image";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { GridOverlayGallery } from "@/components/gallery/grid-overlay-gallery";
import { SimpleGridStats } from "@/components/stats/simple-grid-stats";
import { CenteredTeamCards } from "@/components/teams/centered-team-cards";
import { CompanyLogoTestimonials } from "@/components/testimonials/company-logo-testimonials";
import { GradientOverlayCta } from "@/components/cta/gradient-overlay-cta";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";
import SiteFooter from "@/components/footers/newsletter-footer";

export default function Home() {
  return (
    <>
      <AnimatedIndicatorNavbar />
      <TwoColumnHeroWithImage />
      <ThreeColumnImageCards />
      <GridOverlayGallery />
      <SimpleGridStats />
      <CenteredTeamCards />
      <CompanyLogoTestimonials />
      <GradientOverlayCta />
      <ComprehensiveContactForm />
      <SiteFooter />
    </>
  );
}
