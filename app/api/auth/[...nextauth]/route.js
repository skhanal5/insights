import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      
      async authorize(credentials, req) {

        // check if our user exists
        const res = await fetch(process.env.BACKEND_API_URL + "/auth", {
          method:"POST",
          headers: {
            "Content-Type": "applications/json",
          },
          body:JSON.stringify({
            email:credentials?.email,
            password: credentials?.password
          })
        })

        const user = await res.json();

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn:"/login"
  }
})


export {authHandler as GET, authHandler as POST}