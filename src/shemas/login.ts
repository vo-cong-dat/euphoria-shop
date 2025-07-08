import { z } from "zod";

export const schemaLogin = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

type TLogin = z.infer<typeof schemaLogin>;

export type { TLogin };
