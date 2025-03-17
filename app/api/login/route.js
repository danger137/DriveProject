import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { getIronSession } from "iron-session";
import { sessionOptions } from "../../lib/session";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Find user by email
    const user = await prisma.user3.findUnique({ where: { email } });
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create a response object
    const res = new Response(
      JSON.stringify({
        message: "Login successful",
        name: user.name,
        role: user.role, // Role added
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    // Get session and set user data
    const session = await getIronSession(req, res, sessionOptions);
    session.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role, // Store role in session
    };
    await session.save();

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
}
