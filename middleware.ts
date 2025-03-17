import { NextRequest, NextResponse } from "next/server";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers"; // ✅ Correct cookie handling

// ✅ Define a Type for the Session
interface SessionData {
  user?: {
    role: string;
  };
}

export async function middleware(req: NextRequest) {
  const cookieStore = cookies(); // ✅ Correct way to access cookies

  // ✅ Pass the correct type for `IronSession`
  const session: IronSession<SessionData> = await getIronSession<SessionData>(await cookieStore, {
    password: process.env.SECRET_SESSION_PASSWORD as string,
    cookieName: "driving_app_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  if (!session.user) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  const { role: userRole } = session.user;
  const { pathname } = req.nextUrl; // Requested URL

  console.log("User Role:", userRole);
  console.log("Requested Page:", pathname);

  if (userRole === "admin") {
    return NextResponse.next();
  } else if (userRole === "user" && pathname === "/BlogAd") {
    return NextResponse.redirect(new URL("/videos", req.url)); // ❌ User cannot access BlogAd
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/BlogAd", "/videos"], // ✅ Apply middleware only to these pages
};
