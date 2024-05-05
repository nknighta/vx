import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/account/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id

      return { ...session, user: { ...session.user } }
    },
  },
}

export default NextAuth(authOptions)
