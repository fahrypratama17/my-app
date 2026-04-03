import { NextRequest, NextResponse } from "next/server";
import { envServer } from "@/shared/lib/env.server";

type RouteContext = {
  params: Promise<{ path: string[] }> | { path: string[] };
};

const ALLOWED_AUTH_PATHS = new Set([
  "login",
  "register",
  "forgot-password",
  "reset-password",
]);

const ALLOWED_METHODS = new Set(["POST"]);

export async function POST(req: NextRequest, context: RouteContext) {
  const requestId = crypto.randomUUID();

  try {
    const resolved = await Promise.resolve(context.params);
    const [endpoint] = resolved.path ?? [];

    if (!endpoint || !ALLOWED_AUTH_PATHS.has(endpoint)) {
      return NextResponse.json(
        {
          success: false,
          message: "Endpoint auth tidak diizinkan",
        },
        { status: 404 },
      );
    }

    if (!ALLOWED_METHODS.has(req.method)) {
      return NextResponse.json(
        {
          success: false,
          message: "Method tidak diizinkan",
        },
        { status: 405 },
      );
    }

    const rawBody = await req.text();
    const contentType = req.headers.get("content-type") || "application/json";

    const backendBaseUrl = envServer.API_URL.replace(/\/+$/, "");
    const backendResponse = await fetch(`${backendBaseUrl}/auth/${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": contentType,
      },
      body: rawBody,
      cache: "no-store",
    });

    const raw = (await backendResponse.json().catch(() => null)) as unknown;
    return NextResponse.json(raw, { status: backendResponse.status });
  } catch (error) {
    console.error("[api/auth proxy error]", {
      requestId,
      path: req.nextUrl.pathname,
      method: req.method,
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat memproses endpoint auth",
        request_id: requestId,
      },
      { status: 500 },
    );
  }
}

