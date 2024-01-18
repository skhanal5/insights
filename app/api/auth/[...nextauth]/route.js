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
        console.log(user)
        if (user.hasOwnProperty("email")) {
          return {
            emaiL: user.email,
            name: user.firstName
          }
        } else {
          throw new Error("Received invalid credentials.")
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

        const responseBody = await response.json();
        if (responseBody.hasOwnProperty("$metadata")) {
          return {
            name: credentials.firstName, 
            email: credentials.email
          }
        } else {
          throw new Error("Something went wrong. Please try again later")
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
