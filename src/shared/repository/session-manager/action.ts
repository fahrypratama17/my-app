"use server";

import { getIronSession, type IronSession } from "iron-session";
import { cookies } from "next/headers";
import {
  defaultSession,
  Max_Age,
  SessionData,
  sessionOptions,
} from "@/shared/lib/auth/session";
import { decodeToken } from "@/shared/lib/auth/decode";

async function _getSession() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );

  if (session.expiresAt && session.expiresAt < Date.now()) {
    session.destroy();
  }

  if (!session.isLoggedIn) {
    session.user = defaultSession.user;
    session.access_token = defaultSession.access_token;
    session.refresh_token = defaultSession.refresh_token;
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function createSession(token: string) {
  const session = await _getSession();
  const decode = decodeToken(token);
  session.access_token = token;
  session.user = decode.user.user;
  session.refresh_token = decode.user.refresh_token;
  session.isLoggedIn = decode.user.isLoggedIn;
  session.expiresAt = Date.now() + Max_Age;

  await session.save();
}

export async function destroySession() {
  const session = await _getSession();
  session.destroy();
}

export async function getSession(): Promise<IronSession<SessionData>> {
  const session = await _getSession();
  return JSON.parse(JSON.stringify(session));
}
