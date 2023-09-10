import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: "asdasd8s7d69a8s7dgasdasd7",
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const { username, password } = credentials;
        if (
          username === process.env.LOGIN_USERNAME &&
          password === process.env.LOGIN_PASSWORD
        ) {
          return { id: "1", name: "Ridwan Hidayat", username: "ridwan" };
        } else {
          throw new Error("Username or password wrong");
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
