import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="shrink-0 flex flex-col md:flex-row items-center">
                {/* Logo */}
                <Link
                  className="inline-flex mb-2 md:mb-0"
                  href="/"
                  aria-label="Cruip"
                >
                  <Image src={Logo} width={36} height={28} alt="Logo" />
                </Link>
                <div className="text-sm text-slate-500 ml-4">
                  Copyright © Melvynx
                  <span className="md:hidden lg:inline">
                    . All rights reserved.
                  </span>
                </div>
              </div>
            </div>
            {/* Social links */}
            <ul className="inline-flex space-x-2">
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://mlv.sh/twitter"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://www.youtube.com/channel/UC5HDIVwuqoIuKKw-WbQ4CvA"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.8 12.8c-.2-1.3-.8-2.2-2.2-2.4C19.4 10 16 10 16 10s-3.4 0-5.6.4c-1.4.2-2.1 1.1-2.2 2.4C8 14.1 8 16 8 16s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4 2.2.4 5.6.4 5.6.4s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2ZM14 19v-6l5 3-5 3Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="mailto:contact+podcast@melvynx.com"
                  aria-label="Telegram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
