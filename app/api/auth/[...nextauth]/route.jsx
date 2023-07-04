import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;
        if (username === "ridwan" && password === "123") {
          return { id: "1", name: "ridwan hidayat", username: "ridwan" };
        } else {
          throw new Error("Username or password wrong");
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
