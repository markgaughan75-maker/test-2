import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@company.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // TODO: Replace with real user lookup
        if (
          credentials?.email === "demo@demo.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Demo User", email: "demo@demo.com" };
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/signin"
  }
});
