import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // check if our user exists
        const response = await fetch(process.env.BACKEND_API_URL + "/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: "register",

      //add more if needed later on (DOB, etc.)
      credentials: {
        firstName: { label: "FirstName", type: "text" },
        lastName: { label: "LastName", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // add user into table
        const response = await fetch(process.env.BACKEND_API_URL + "/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: credentials?.firstName,
            lastName: credentials?.lastName,
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();
        if (user) {
          console.log(user)
          return user;
        } else {
          console.log(user)
          throw new Error("WTF Happened")
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

export { authHandler as GET, authHandler as POST };
