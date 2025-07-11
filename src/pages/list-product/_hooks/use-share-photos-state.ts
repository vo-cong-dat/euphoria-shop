import { create } from "zustand";

const initState = {
  list: [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  ],
};

export const useSharePhotosState = create((set) => ({
  ...initState,
  setPhotos: (newData: []) =>
    set((state: []) => {
      return { list: [...state.list, ...newData] };
    }),

  setFavoritePhoto: (newData: []) =>
    set(() => {
      return { list: newData };
    }),

  removePhoto: () => set(initState),
}));
