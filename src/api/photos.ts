import httpRequest from "./http";

export const getPhotos = async () => {
  const res = httpRequest.get("/photos", {});
  return res;
};
