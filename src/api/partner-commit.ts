import httpRequest from "./http";

export const getPartnerCommit = async () => {
  const res = httpRequest.get("/partner-commit", {});
  return res;
};
