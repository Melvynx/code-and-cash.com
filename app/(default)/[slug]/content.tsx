"use client";

import { Post } from "@/.contentlayer/generated";
import AudioContext from "@/app/audio-context";
import { Mdx } from "@/components/mdx/mdx";
import PostDate from "@/components/post-date";
import {
  SiApplepodcasts,
  SiSpotify,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Sidebar from "./sidebar";

export default function PostContent({ ...props }: Post) {
  const audio = useRef<any>(null);

  const goToTime = (time: string) => {
    audio.current && audio.current.goToTime(time);
  };

  return (
    <AudioContext.Provider value={{ goToTime }}>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 pt-16 md:pb-20 md:pt-40">
            <div className="relative">
              {/* Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden"
                aria-hidden="true"
              >
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src={props.bg}
                  width="1270"
                  height="408"
                  alt="Podcast image"
                />
              </div>
              {/* Content */}
              <div className="py-12 flex flex-col lg:flex-row gap-6 lg:gap-8 md:py-20 -mx-20 px-20">
                <div className="md:flex justify-between items-center text-center md:text-left">
                  {/* Left content */}
                  <div className="max-w-3xl">
                    {/* Copy */}
                    <h1 className="h2 font-hkgrotesk text-slate-100 mb-4">
                      {props.title}
                    </h1>
                    <div className="font-hkgrotesk text-white font-medium opacity-80 mb-8">
                      {props.category} ·{" "}
                      <PostDate dateString={props.publishedAt} /> · Episode{" "}
                      {props.numero}
                    </div>
                    <iframe
                      src={`https://podcasters.spotify.com/pod/show/du-code-et-du-cash/embed/episodes/XXXX-${props.spotifyId}`}
                      height="102px"
                      width="400px"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                    <div className="h-10" />
                    {props.spotifyId && (
                      <Link
                        className="btn-sm mr-4 text-white bg-pink-500 hover:bg-pink-600 group shadow-sm"
                        href={`https://podcasters.spotify.com/pod/show/du-code-et-du-cash/episodes/XXX-${props.spotifyId}`}
                      >
                        <SiSpotify size={16} className="mr-2" />
                        Spotify
                        <span className="tracking-normal text-pink-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </Link>
                    )}
                    {props.apple && (
                      <Link
                        className="btn-sm mr-4 text-white bg-pink-500 hover:bg-pink-600 group shadow-sm"
                        href={props.apple}
                      >
                        <SiApplepodcasts size={16} className="mr-2" />
                        Apple Podcast
                        <span className="tracking-normal text-pink-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </Link>
                    )}
                    {props.youtube && (
                      <Link
                        className="btn-sm mr-4 text-white bg-pink-500 hover:bg-pink-600 group shadow-sm"
                        href={props.youtube}
                      >
                        <SiYoutube size={16} className="mr-2" />
                        YouTube
                        <span className="tracking-normal text-pink-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                <div className=" flex-1 hidden lg:block">
                  <Image
                    src={`/podcast/${props.numero}.png`}
                    width={250}
                    height={250}
                    alt="Podcasat cover"
                    className="rounded-md shadow-md object-cover ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="md:flex md:justify-between md:space-x-14">
              {/* Main content */}
              <div className="md:grow mb-12 md:mb-0">
                {/* Notes */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4">
                    Notes
                  </h2>
                  <Mdx code={props.body.code} />
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </AudioContext.Provider>
  );
}
