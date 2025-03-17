export const sessionOptions = {
  password: process.env.SECRET_SESSION_PASSWORD || "a_super_secure_fallback_password_that_is_32_chars_min",
  cookieName: "driving_app_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
