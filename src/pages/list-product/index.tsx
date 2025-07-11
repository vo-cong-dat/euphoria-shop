import { getPhotos } from "@/api/photos";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSharePhotosState } from "./_hooks/use-share-photos-state";
import ProductList from "./_components/product-list";

export default function ListProductPage() {
  const setPhotos = useSharePhotosState((state) => state.setPhotos);
  const removePhoto = useSharePhotosState((state) => state.removePhoto);

  const handleGetPhotos = async () => {
    try {
      const res = await getPhotos();
      const photos = res?.splice(0, 20).map((photo) => ({
        ...photo,
        isFavorite: false,
      }));
      console.log(photos);

      setPhotos(photos as unknown as []);
    } catch (error) {
      toast("Get data has error" + JSON.stringify(error));
    }
  };

  useEffect(() => {
    handleGetPhotos();

    return () => {
      removePhoto();
    };
  }, []);

  return (
    <div className="flex gap-[50px]">
      <div className="w-1/4" />
      <div className="w-3/4">
        <ProductList />
      </div>
    </div>
  );
}
