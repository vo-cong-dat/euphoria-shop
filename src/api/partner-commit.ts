import httpRequest from "./http";

export const getPartnerCommit = async () => {
  const res = httpRequest.get("/users", {});
  return res;
};
