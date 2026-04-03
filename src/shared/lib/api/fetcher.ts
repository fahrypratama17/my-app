import { processResponse } from "@/shared/lib/api/response";
import { getSessionWithAutoRefresh } from "@/shared/repository/session-manager/action";
import type { ApiResponse } from "@/shared/types/api/API-response";
import type { TAPIQuery } from "@/shared/types/api/TAPI-query";
import { appendQueryParams } from "../query-params";

function buildRequestUrl(url: string): URL {
  // Support both absolute URLs and relative internal API routes.
  if (/^https?:\/\//i.test(url)) {
    return new URL(url);
  }

  if (typeof window !== "undefined") {
    return new URL(url, window.location.origin);
  }

  const fallbackOrigin =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return new URL(url, fallbackOrigin);
}

export async function apiFetch<T>({
  url,
  options = {},
  query,
  isFormData = false,
  withAuth = true,
  errorMessage = "Error fetching data",
  successMessage = "Success",
}: {
  url: string;
  options?: RequestInit;
  query?: TAPIQuery;
  isFormData?: boolean;
  withAuth?: boolean;
  errorMessage?: string;
  successMessage?: string;
}): Promise<ApiResponse<T>> {
  const defaultHeaders: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (isFormData) {
    defaultHeaders["Content-Type"] = "multipart/form-data";
  }

  try {
    if (withAuth) {
      try {
        const session = await getSessionWithAutoRefresh();
        if (session?.access_token) {
          defaultHeaders.Authorization = `Bearer ${session.access_token}`;
        }
      } catch {
        // Allow public endpoints to continue even if session config is not ready.
      }
    }

    const _url = buildRequestUrl(url);

    if (query) {
      appendQueryParams(_url, query);
    }

    const response = await fetch(_url.toString(), {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    return processResponse<T>(response, errorMessage, successMessage);
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
      message: errorMessage,
    };
  }
}
