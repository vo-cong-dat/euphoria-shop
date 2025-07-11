import { Button } from "@/components/button";
import { Card, CardContent, CardTitle } from "@/components/card";
import type { IPhoto } from "@/types/photo";
import { HeartIcon, HeartPlusIcon } from "lucide-react";
import { useSharePhotosState } from "../_hooks/use-share-photos-state";
import { cn } from "@/utils/cn";

interface IProps {
  data: IPhoto;
}

export default function ProductItem({ data }: IProps) {
  const photos = useSharePhotosState((state) => state.list);
  const setFavoritePhoto = useSharePhotosState(
    (state) => state.setFavoritePhoto,
  );

  const handleFavoritePhoto = (id: number) => {
    const photoList = photos?.map((photo: IPhoto) => ({
      ...photo,
      isFavorite: photo.id === id ? !photo.isFavorite : photo.isFavorite,
    }));

    setFavoritePhoto(photoList);
  };

  return (
    <Card className="relative w-[calc(100%/3-16px)]">
      <div>
        <img
          src={`https://placehold.co/600x400/?text=${data?.title?.replaceAll(" ", "+")}`}
          alt={data?.title}
        />
      </div>
      <CardContent className="flex w-full items-center justify-between gap-4 overflow-hidden">
        <div className="flex-1">
          <CardTitle className="truncate">{data?.title}</CardTitle>
          <span>Jhanvi’s Brand</span>
        </div>
        <Button variant="elevated" size="auto" className="shrink-0 p-1">
          $123.00
        </Button>
      </CardContent>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleFavoritePhoto(data.id)}
        className={cn("absolute top-6 right-5 size-8 rounded-full bg-white", {
          "bg-pink-500 hover:bg-pink-300": data?.isFavorite,
        })}
      >
        {data?.isFavorite ? (
          <HeartPlusIcon className="size-5 text-black" />
        ) : (
          <HeartIcon className="size-5 text-black" />
        )}
      </Button>
    </Card>
  );
}
