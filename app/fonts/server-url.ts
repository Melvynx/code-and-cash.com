export const getServerUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  //   return process.env.NEXT_PUBLIC_VERCEL_URL;
  // }

  return "https://code-et-cash.com";
};
