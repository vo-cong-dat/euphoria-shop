import type { TLogin } from "@/shemas/login";
import httpRequest from "./http";

export const handleLogin = async (body: TLogin) => {
  const res = httpRequest.post("/auth/login", body);
  return res;
};
