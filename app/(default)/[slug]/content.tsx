'use client'

import { useRef } from 'react'
import AudioContext from '@/app/audio-context'
import PostDate from '@/components/post-date'
import AudioPlayer from '@/components/ui/audio-player'
import { Mdx } from '@/components/mdx/mdx'
import Sidebar from './sidebar'

export default function PostContent({ ...props }) {

  const audio = useRef<any>(null)

  const goToTime = (time: string) => {
    audio.current && audio.current.goToTime(time)
  }

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
                <img className="w-full h-full object-cover rounded-3xl" src={props.bg} width="1270" height="408" alt="Podcast image" />
              </div>

              {/* Content */}
              <div className="py-12 md:py-20 -mx-20 px-20">
                <div className="md:flex justify-between items-center text-center md:text-left">
                  {/* Left content */}
                  <div className="max-w-3xl">
                    {/* Copy */}
                    <h1 className="h2 font-hkgrotesk text-slate-100 mb-4">{props.title}</h1>
                    <div className="font-hkgrotesk text-white font-medium opacity-80 mb-8">{props.category} · <PostDate dateString={props.publishedAt} /> · Episode {props.episode}</div>
                    <AudioPlayer ref={audio} src={props.audio} />
                  </div>
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
                  <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4">Notes</h2>
                  <Mdx code={props.body.code} />
                </div>
              </div>

              <Sidebar />

            </div>
          </div>
        </div>
      </section>
    </AudioContext.Provider>
  )
}
