import type { IPhoto } from "@/types/photo";
import { useSharePhotosState } from "../_hooks/use-share-photos-state";
import ProductItem from "./product-item";

export default function ProductList() {
  const photos = useSharePhotosState((state) => state.list);

  return (
    <div className="flex flex-wrap gap-4">
      {photos.map((photo: IPhoto) => (
        <ProductItem key={photo?.id} data={photo} />
      ))}
    </div>
  );
}
