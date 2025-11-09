import BannerHero from "@/components/home/BannerHero";
import { ProductSec } from "@/components/home/ProductSec";
import Container from "@/components/shared/container";

export default function Home() {
  return (
    <div>
      <BannerHero />
       <Container>
      <div>
        <ProductSec />
      </div>

       </Container>
    </div>
  );
}
