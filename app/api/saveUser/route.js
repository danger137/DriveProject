import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, name, password } = await req.json();

    const existingUser = await prisma.user3.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists!" }), { status: 400 });
    }

    // **Hash password before saving**
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user3.create({
      data: {
        email,
        name,
        password: hashedPassword, // Save hashed password
        role: "user",
      },
    });

    return new Response(JSON.stringify({ message: "User saved successfully!", user: newUser }), { status: 201 });

  } catch (error) {
    console.error("Error saving user:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
