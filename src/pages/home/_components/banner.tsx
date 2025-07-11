import { Card, CardContent } from "@/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";
import BannerImage from "@/assets/images/banners/shop-hero-1-product-slide-1.webp";
import { Button } from "@/components/button";
import { useShareUserState } from "../_hooks/use-share-user-state";

export default function Banner() {
  const users = useShareUserState((state) => state.list) as [];
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {users.map((_, index) => (
          <CarouselItem key={index}>
            <Card className="relative h-[726px]">
              <img src={BannerImage} className="h-full w-auto object-cover" />
              <CardContent className="absolute top-[120px] left-[193px] flex flex-col justify-center gap-10 text-white">
                <span className="text-[32px] font-medium">T-shirt / Tops</span>
                <span className="text-[78px] font-extrabold whitespace-pre-line">
                  Summer{"\n"} Value Pack
                </span>
                <span className="text-[32px] font-medium">
                  cool / colorful / comfy
                </span>
                <Button variant="elevated" className="text-secondary-100">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
