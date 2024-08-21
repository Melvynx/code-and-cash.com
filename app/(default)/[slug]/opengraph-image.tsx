import { getOgImageFont } from "@/app/fonts/og-fonts";
import { getServerUrl } from "@/app/fonts/server-url";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

export const alt = "Codeline";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",

          position: "relative",
          gap: 16,
          fontFamily: "Geist",

          color: "black",
          backgroundColor: "#090910",
          opacity: "1",
          backgroundImage: `url('${getServerUrl()}/images/og.png')`,
        }}
      >
        <div
          tw="flex flex-col justify-start items-start h-full flex-1 pl-16 py-24"
          style={{ gap: 16 }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk",
            }}
            tw="text-3xl font-bold m-0"
          >
            code-et-cash.com/e/{post.numero}
          </p>

          <p
            style={{
              fontFamily: "Space Grotesk",
            }}
            tw="text-xl m-0 mt-12"
          >
            {format(new Date(post.publishedAt), "dd/MM/yyyy")}
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk",
            }}
            tw="text-4xl m-0 mt-0"
          >
            {post.title}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: "auto",
            }}
          >
            <img
              alt="x"
              src={`${getServerUrl()}/images/me2.png`}
              width={64}
              height={64}
            />
            <p
              style={{
                fontFamily: "Space Grotesk",
              }}
              tw="text-4xl m-0"
            >
              Melvynx
            </p>
          </div>
        </div>
        <div tw="flex pr-16 py-24">
          <img
            src={`${getServerUrl()}/podcast/${post.numero}.png`}
            width={400}
            height={400}
          />
        </div>
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: await getOgImageFont(),
    }
  );
}
