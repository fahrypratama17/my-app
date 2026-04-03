import "server-only";
import { z } from "zod";

const envServerSchema = z.object({
  API_URL: z.string().min(1),
});

let cached: z.infer<typeof envServerSchema> | null = null;

export function getServerEnv() {
  if (!cached) {
    const apiUrl =
      process.env.API_URL?.trim() || process.env.NEXT_PUBLIC_API_URL?.trim();

    const parsed = envServerSchema.safeParse({
      API_URL: apiUrl,
    });

    if (!parsed.success) {
      throw new Error(
        `Invalid server env: ${JSON.stringify(parsed.error.flatten().fieldErrors)}. Set API_URL (or NEXT_PUBLIC_API_URL fallback).`,
      );
    }

    cached = parsed.data;
  }

  return cached;
}

// Lazy access keeps strict validation but avoids failing merely by importing this module.
export const envServer = new Proxy({} as z.infer<typeof envServerSchema>, {
  get(_target, prop) {
    return getServerEnv()[prop as keyof z.infer<typeof envServerSchema>];
  },
});
export type TServerEnv = z.infer<typeof envServerSchema>;

