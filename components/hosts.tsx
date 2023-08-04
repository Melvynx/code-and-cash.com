import Promoter from '@/public/images/promoter.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Hosts() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background */}
          <div
            className="absolute inset-0 bg-slate-900 rounded-3xl -mx-20 -z-10"
            aria-hidden="true"
          >
            {' '}
          </div>

          {/* Sparkles */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 mt-14 pointer-events-none -z-10 hidden lg:block"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={1270} height={449}>
              <g fill="#FCD34D" fillRule="nonzero">
                <path d="M979.71 13.283A22.888 22.888 0 0 0 991.205.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM1180.485 439.616a16.241 16.241 0 0 0 8.161-9.311c.088-.244 1.53 7.985 6.429 9.569 0 0-5.894 2.828-7.295 8.425-.02.074-.359-4.446-7.295-8.683ZM547.24 424.661a16.92 16.92 0 0 0 8.478-9.655c.087-.262 1.592 8.274 6.675 9.917 0 0-6.122 2.909-7.57 8.725-.036.095-.385-4.595-7.583-8.987Z" />
              </g>
            </svg>
          </div>

          {/* Scratches */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 -mt-4 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={1270} height={93}>
              <path
                fill="#CBD5E1"
                fillRule="nonzero"
                d="M372.1 40.501c.047-.241-.59-1.335-.601-1.617-.022-.528-.8-2.852-.863-3.32-.222-2.04-.822-4.133-1.068-6.172-.04-.2-.1-.4-.177-.602a3.074 3.074 0 0 1-.17-.49c-.167-.878-.236-1.758-.449-2.606l-.161-.74c-.33-1.478-.69-2.953-.867-4.404a1.426 1.426 0 0 0-.153-.602l-.148-.337a8.607 8.607 0 0 1-.667-2.686c-.093-.198-.194-4.857-.263-5.038a3.417 3.417 0 0 1-.28-1.082 47.549 47.549 0 0 0-.07-2.578l-.054-.948-.104-2.476a12.56 12.56 0 0 1-.005-.311l.003-.276c.28-1.47.706-2.88 1.27-4.216.112.008.227.032.341.071.323.095.732.435.926.156.07-.1.809-.13 1.061.225.304.351.564.724.773 1.11.24.728.436 1.456.586 2.18.112.521.089 1.009.717 1.61.282.26.227.495.291.735.47 1.719.9 3.373 1.469 5.073.213.707.82 5.81.526 6.232a1.626 1.626 0 0 0-.104.9 24.24 24.24 0 0 0 .719 5.66l.08.335c.097.448.159.891.185 1.327l.41 7.361a25.688 25.688 0 0 1-.144 3.56c-.154 1.2-.445 4.796-.516 5.02-.134.349-.287.727-.498 1.03-.104.165-.747.022-.976-.191-.669-.648-1.129-1.263-1.018-1.893Zm31.924 35.08c-.032.203-.704.032-.967-.202-.81-.643-1.334-1.464-1.38-2.16l-.009-.068c-.087-.369-.798-1.473-.93-1.887-.11-.592-1.204-3.198-1.33-3.716-.49-2.232-1.386-4.58-1.873-6.815a5.519 5.519 0 0 0-.249-.675 5.192 5.192 0 0 1-.21-.535c-.248-.956-.433-1.895-.731-2.865-.569-1.892-1.2-3.8-1.604-5.647a2.019 2.019 0 0 0-.218-.667l-.197-.426a12.832 12.832 0 0 1-.926-2.905l-.506-2.808c-.24-1.314-.484-2.613-.52-2.707a4.92 4.92 0 0 1-.437-1.208l-1.27-7.228a20.203 20.203 0 0 1 .35-4.59c.11.015.228.05.344.101l.084.033c.31.134.67.423.84.18l.023-.022c.137-.078.785-.028 1.05.334.351.431.645.874.872 1.317.34.814.625 1.62.85 2.414.157.596.214 1.108.857 1.792l.093.11c.107.143.154.278.19.41l.052.2.03.1c.721 1.901 1.387 3.777 2.134 5.675l.032.084c.365 1.037 1.446 6.309 1.28 6.766-.063.294-.044.628.058.984.307 2.03.827 4.123 1.554 6.26.223.624.396 1.24.518 1.842.245 1.333.506 2.676.772 4.025l.81 4.063c.229 1.324.373 2.62.433 3.887.038 1.216.357 4.708.386 5.359l.001.094c-.058.38-.161.738-.256 1.1Zm27.71 17.315c-.013.193-.678.099-1.005-.13a7.826 7.826 0 0 1-1.297-1.232c-.348-.409-.57-.827-.63-1.191-.065-.31-1.066-1.669-1.167-2.047-.168-.632-1.555-3.446-1.72-3.997-.663-2.349-1.745-4.85-2.428-7.224a6.134 6.134 0 0 0-.312-.722 5.71 5.71 0 0 1-.266-.58c-.328-1.014-.576-2.003-.953-3.035-.741-2.01-1.523-4.05-2.07-6.009a2.38 2.38 0 0 0-.262-.706c-.82-1.305-.999-2.393-1.406-3.556l-.01-.026c-.04-.115-.139-.518-.266-1.06l-.78-3.425c-.11-.48-.202-.875-.258-1.104l-.057-.209a5.815 5.815 0 0 1-.51-1.278l-1.627-7.622a22.879 22.879 0 0 1 .069-4.762c.106.02.22.059.335.113l.079.036c.322.16.724.499.845.228.047-.102.765-.05 1.085.383.381.465.708.936.972 1.4.406.872.755 1.73 1.043 2.573.1.592.451 1.266 1.004 1.932.3.32.318.591.436.876.88 2.022 1.702 4.022 2.625 6.05.344.8 2.122 6.757 1.941 7.243-.048.304-.006.653.123 1.03.463 2.138 1.168 4.359 2.104 6.64.288.668.52 1.322.693 1.958l2.297 8.566c.279 1.347.63 2.747.8 4.092.038.318.105.782.187 1.31l.317 1.986c.107.615.25 1.212.28 1.643.028.43.076.728.045.773l-.124.562-.132.52Z"
              />
            </svg>
          </div>

          <div className="py-12 md:py-20 -mx-20 px-20 overflow-hidden">
            <div className="lg:flex items-start">
              {/* Left content */}
              <div className="flex-1 mb-12 lg:mb-0">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold text-slate-100 mb-2">
                    Rencontre le créateur
                  </h2>
                  <div className="text-slate-400 space-y-3">
                    <p>
                      Depuis 2021 je me suis lancé en tant que développeur
                      indépendant et je partage mon expérience sur mon podcast.
                    </p>
                    <p>
                      Mais je suis jamais seul ! Je profite de partage avec d'autre
                      personne pour me livrer et écouter les histoires de la
                      communauté francophone.
                    </p>
                    <p>
                      En vrai, c'est juste mon kiff de partager ma passion que ce
                      soit le développement, le marketing et l'entrepreneuriat. C'est
                      plus un podcast pour moi mais j'ai aussi envie de vous faire
                      kiffer et vous apprendre des choses.
                    </p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex items-center">
                    <Image
                      className="shrink-0 rounded-full mr-3"
                      src={Promoter}
                      width={48}
                      height={48}
                      alt="Promoter"
                    />
                    <div className="font-permanent-marker text-slate-300 text-sm uppercase">
                      — Melvyn <br />
                      Malherbe
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm"
                    href="/subscribe"
                  >
                    Écouter gratuitement{' '}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
              {/* Right content */}
              <div className="lg:w-[640px] lg:ml-12 xl:ml-20">
                <div className="space-y-12 lg:space-y-20">
                  {/* Host */}
                  <div className="flex items-start">
                    <Image
                      className="mr-6"
                      src={Promoter}
                      width={153}
                      height={130}
                      alt="Host 01"
                    />
                    <div>
                      <div className="text-lg font-hkgrotesk font-extrabold text-slate-100">
                        Melvyn Malherbe
                      </div>
                      <div className="mb-2">
                        <a
                          className="font-hkgrotesk font-medium text-sm text-blue-500 hover:underline"
                          href="https://twitter.com/melvynxdev"
                        >
                          @melvynxdev
                        </a>
                      </div>
                      <div className="text-slate-400">
                        Melvyn est le créateur de plusieurs formation sur le
                        développement web en Français. Il a créer sa propre
                        plateforme de formation et nombreuse autre application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
