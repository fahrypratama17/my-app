import { NextRequest, NextResponse } from "next/server";
import { envServer } from "@/shared/lib/env.server";
import { getSessionWithAutoRefresh } from "@/shared/repository/session-manager/action";

type RouteContext = {
  params: Promise<{ path: string[] }> | { path: string[] };
};

async function forwardProtectedRequest(
  req: NextRequest,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  context: RouteContext,
) {
  try {
    const session = await getSessionWithAutoRefresh();

    if (!session?.access_token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const resolved = await Promise.resolve(context.params);
    const segments = resolved.path ?? [];

    if (segments.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Path endpoint tidak valid",
        },
        { status: 400 },
      );
    }

    const pathname = segments.map(encodeURIComponent).join("/");
    const search = req.nextUrl.search;
    const backendUrl = `${envServer.API_URL}/${pathname}${search}`;

    const headers: HeadersInit = {
      Accept: "application/json",
      Authorization: `Bearer ${session.access_token}`,
    };

    const init: RequestInit = {
      method,
      headers,
      cache: "no-store",
    };

    if (method !== "GET") {
      const contentType = req.headers.get("content-type");
      const rawBody = await req.text();

      if (contentType) {
        (headers as Record<string, string>)["Content-Type"] = contentType;
      }

      if (rawBody) {
        init.body = rawBody;
      }
    }

    const backendResponse = await fetch(backendUrl, init);
    const raw = (await backendResponse.json().catch(() => null)) as unknown;

    if (!backendResponse.ok) {
      const message =
        typeof raw === "object" &&
        raw !== null &&
        "message" in raw &&
        typeof raw.message === "string"
          ? raw.message
          : "Gagal memproses request endpoint protected";

      return NextResponse.json(
        {
          success: false,
          message,
        },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json(raw, { status: backendResponse.status });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat memproses endpoint protected",
      },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest, context: RouteContext) {
  return forwardProtectedRequest(req, "GET", context);
}

export async function POST(req: NextRequest, context: RouteContext) {
  return forwardProtectedRequest(req, "POST", context);
}

export async function PUT(req: NextRequest, context: RouteContext) {
  return forwardProtectedRequest(req, "PUT", context);
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  return forwardProtectedRequest(req, "PATCH", context);
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  return forwardProtectedRequest(req, "DELETE", context);
}

