import { AuthConfig } from "convex/server";

if (!process.env.CLERK_JWT_ISSUER_DOMAIN) {
  throw new Error(
    "CLERK_JWT_ISSUER_DOMAIN environment variable is not set. Please set it to your Clerk Issuer URL from your 'convex' JWT template or configure it on the Convex Dashboard.",
  );
}
export default {
  providers: [
    // Uncomment this once you have set up a Clerk app
    {
      // Replace with your own Clerk Issuer URL from your "convex" JWT template
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      // and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
