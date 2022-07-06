import SlackProvider from "next-auth/providers/slack";

/** @type {import("next-auth").NextAuthOptions} */
export const authConfig = {
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    }),
  ],
  theme: {
    logo: "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
    colorScheme: "light",
    brandColor: "#663399",
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
};
