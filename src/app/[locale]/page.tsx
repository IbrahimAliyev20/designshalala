import BannerHero from "@/components/home/BannerHero";
import { HomeProductCarousel } from "@/components/home/HomeProductCarousel";
import Container from "@/components/shared/container";

export default function Home() {
  return (
    <div>
      <BannerHero />
       <Container>
        <HomeProductCarousel />       

       </Container>
    </div>
  );
}
