import type { SatoriOptions } from "next/dist/compiled/@vercel/og/satori";
import { getServerUrl } from "./server-url";

export const getOgImageFont = async () => {
  const spaceGroteskLight = fetch(
    `${getServerUrl()}/fonts/SpaceGrotesk-Light.ttf`
  ).then(async (res) => res.arrayBuffer());

  const spaceGroteskRegular = fetch(
    `${getServerUrl()}/fonts/SpaceGrotesk-Regular.ttf`
  ).then(async (res) => res.arrayBuffer());

  const spaceGroteskMedium = fetch(
    `${getServerUrl()}/fonts/SpaceGrotesk-Medium.ttf`
  ).then(async (res) => res.arrayBuffer());

  const spaceGroteskSemiBold = fetch(
    `${getServerUrl()}/fonts/SpaceGrotesk-SemiBold.ttf`
  ).then(async (res) => res.arrayBuffer());
  const spaceGroteskBold = fetch(
    `${getServerUrl()}/fonts/SpaceGrotesk-Bold.ttf`
  ).then(async (res) => res.arrayBuffer());

  return [
    {
      name: "Space Grotesk",
      data: await spaceGroteskLight,
      style: "normal",
      weight: 300,
    },
    {
      name: "Space Grotesk",
      data: await spaceGroteskRegular,
      style: "normal",
      weight: 400,
    },
    {
      name: "Space Grotesk",
      data: await spaceGroteskMedium,
      style: "normal",
      weight: 500,
    },
    {
      name: "Space Grotesk",
      data: await spaceGroteskSemiBold,
      style: "normal",
      weight: 600,
    },
    {
      name: "Space Grotesk",
      data: await spaceGroteskBold,
      style: "normal",
      weight: 700,
    },
  ] satisfies SatoriOptions["fonts"];
};
