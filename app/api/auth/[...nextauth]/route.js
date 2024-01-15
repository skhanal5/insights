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
        const res = await fetch(process.env.BACKEND_API_URL + "/auth", {
          method: "POST",
          headers: {
            "Content-Type": "applications/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

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
        const res = await fetch(process.env.BACKEND_API_URL + "/users", {
          method: "POST",
          headers: {
            "Content-Type": "applications/json",
          },
          body: JSON.stringify({
            firstName: credentials?.firstName,
            lastName: credentials?.lastName,
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        console.log(user)
        if (user) {
          return user;
        } else {
          return null;
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
