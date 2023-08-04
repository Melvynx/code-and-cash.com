import Link from 'next/link';

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            {/* Illustration */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10 blur-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
                <defs>
                  <filter
                    id="hi-a"
                    width="133.3%"
                    height="131.3%"
                    x="-16.7%"
                    y="-15.6%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                  <filter
                    id="hi-b"
                    width="133.3%"
                    height="131.3%"
                    x="-16.7%"
                    y="-15.6%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                  <filter
                    id="hi-c"
                    width="159.9%"
                    height="145%"
                    x="-29.9%"
                    y="-22.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#6D28D9"
                    fillOpacity=".72"
                    d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                    filter="url(#hi-a)"
                    transform="translate(0 -605)"
                  />
                  <path
                    fill="#67E8F9"
                    fillOpacity=".64"
                    d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                    filter="url(#hi-b)"
                    transform="translate(0 -605)"
                  />
                  <path
                    fill="#F472B6"
                    fillOpacity=".8"
                    d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
                    filter="url(#hi-c)"
                    transform="translate(0 -605)"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="py-12 md:py-20 -mx-20 px-20">
            <div className="md:flex justify-between items-center text-center md:text-left">
              {/* Left content */}
              <div className="md:max-w-[640px]">
                {/* Copy */}
                <h2
                  className="h2 font-hkgrotesk font-extrabold text-slate-100 mb-6"
                  data-aos="fade-right"
                >
                  Apprends à vivre ta passion en tant que
                  <span className="font-permanent-marker text-blue-500 font-normal whitespace-nowrap">
                    right{' '}
                    <span className="inline-flex relative">
                      <svg
                        className="absolute right-0 top-full mt-1 max-w-none -z-10"
                        width="135"
                        height="9"
                        viewBox="0 0 135 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-white"
                          fillRule="nonzero"
                          d="M36.54 1.016C40.01.912 43.39.78 46.95.712 50.51.644 54.071.567 57.81.566c2.744.002 5.018-.162 7.897-.113 9.89.085 20.486.459 31.646 1.116 2.484.151 4.835.242 7.296.39 2.461.147 4.924.282 7.34.413 1.528.069 3.186.202 4.684.31a187 187 0 0 1 4.89.34c3.416.326 6.937.738 10.5 1.23 2.316.32 2.482.762 1.474 1.152-1.082.485-3.3.708-6.3.635-.705-.026-1.39-.039-2.117-.076l-2.202-.137-4.43-.268a899.607 899.607 0 0 1-8.75-.477c-2.953-.174-5.754-.262-8.71-.427-2.955-.165-5.803-.257-8.829-.424-1.786-.084-3.509-.137-5.156-.16-1.697-.039-3.396-.07-5.027-.081l-9.497.059c-6.873.071-13.98.132-20.388.403-4.089.123-7.886.344-11.683.565l-8.169.637c-2.596.256-5.236.496-7.537.828-1.768.261-3.332.576-4.873.895-1.541.319-2.877.683-4.575.95-.775.112-1.367.265-2.142.376-2.903.406-4.781.312-8.094-.282a79.95 79.95 0 0 1-2.301-.412C.465 7.541-.327 6.866.558 6.205c.714-.471 1.384-.971 2.398-1.395 1.013-.424 2.483-.741 3.838-1.08 1.355-.34 3.28-.546 5.025-.802 1.744-.256 3.69-.446 5.594-.66C23.24 1.688 29.49 1.233 36.13.904l.408.112Z"
                          opacity=".32"
                        />
                      </svg>
                      développeur
                    </span>
                    <span className="text-slate-100">.</span>
                  </span>
                </h2>
                <p
                  className="text-slate-400"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Mon but est de te donner la motivation et les clés pour te lancer.
                  Même si tu souhaites juste devenir développeur free-lance en
                  gagnant mieux ta vie, tu es au bonne endroit.
                </p>
              </div>

              {/* Right content */}
              <div
                className="mt-6 md:ml-5 md:mt-0"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                <Link
                  className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm"
                  href="/subscribe"
                >
                  Écouter
                  <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
