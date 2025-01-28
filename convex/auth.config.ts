export default {
  providers: [
    {
      // domain: 'https://your-issuer-url.clerk.accounts.dev/',
      domain: process.env.CLEARCk_ISSUER_URL,
      applicationID: 'convex',
    },
  ],
};
