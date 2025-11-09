import { AboutSec } from "@/components/home/AboutSec";
import BannerHero from "@/components/home/BannerHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FaqSec } from "@/components/home/FaqSec";
import { HomeProductCarousel } from "@/components/home/HomeProductCarousel";
import Container from "@/components/shared/container";

export default function Home() {
  return (
    <div>
      <BannerHero />
      <Container>
        <AboutSec />
        <HomeProductCarousel />
        <FaqSec />
      </Container>
        <ContactCTA />
    </div>
  );
}
