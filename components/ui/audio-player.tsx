'use client'

import { forwardRef, useImperativeHandle, useState, useEffect, useRef, KeyboardEventHandler } from 'react'

interface AudioPlayerRef {
  goToTime: (time: string) => void;
}

function AudioPlayerComponent(
  { src }: {
    src: string 
  },
  ref: React.ForwardedRef<AudioPlayerRef>
) {

  const audio = useRef<HTMLAudioElement>(null)
  const slider = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState<boolean>(false)
  const [wasPlaying, setWasPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [outputDuration, setOutputDuration] = useState<string>('0:00')
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [outputCurrentTime, setOutputCurrentTime] = useState<string>('0:00')
  const [progress, setProgress] = useState<number>(0)
  const [isDownEvent, setIsDownEvent] = useState<boolean>(false)
  const speedOptions = [1, 1.5, 2]
  const speedOutput = useRef<string[]>(['1x', '1.5', '2x'])
  const [speedIndex, setSpeedIndex] = useState<number>(0)

  // Handle slider events
  useEffect(() => {
    window.addEventListener('mousedown', downEvent)
    window.addEventListener('touchstart', downEvent)
    window.addEventListener('mousemove', moveEvent)
    window.addEventListener('touchmove', moveEvent)
    window.addEventListener('mouseup', upEvent)
    window.addEventListener('touchend', upEvent)
    return () => {
      window.removeEventListener('mousedown', downEvent)
      window.removeEventListener('touchstart', downEvent)
      window.removeEventListener('mousemove', moveEvent)
      window.removeEventListener('touchmove', moveEvent)
      window.removeEventListener('mouseup', upEvent)
      window.removeEventListener('touchend', upEvent)
    }
  })

  // Update playback rate on speed option change
  useEffect(() => {
    audio.current && (audio.current.playbackRate = speedOptions[speedIndex])
  }, [speedIndex])

  // Update duration output
  useEffect(() => {
    setOutputDuration(formatTime(duration))
  }, [duration])

  const loadedMetadata = () => {    
    audio.current && setDuration(Math.floor(audio.current.duration) || 0)
  }

  const formatTime = (seconds: number) => {
    const pad = (num: number) => (num < 10 ? `0${num}` : num)
    const H: number = +pad(Math.floor(seconds / 3600))
    const i: number = +pad(Math.floor((seconds % 3600) / 60))
    const s: number = +pad(Math.floor(seconds % 60))
    let result = ''
    if (H > 0) {
      result += `${H}:`
    }
    result += `${H > 0 ? pad(i) : i}:${pad(s)}`
    return result
  }

  const playAudio = () => {
    audio.current?.play()
    setPlaying(true)
  }

  const pauseAudio = () => {
    audio.current?.pause()
    setPlaying(false)
  }

  const togglePlaying = () => {
    playing ? pauseAudio() : playAudio()
  }

  const keepRange = (value: number) => {
    if (value < 0) return 0
    if (value > 1) return 1
    return value
  }

  const updateBarPosition = (e: MouseEvent | TouchEvent) => {
    const x = 'pageX' in e ? e.pageX : e.touches[0].pageX
    const pos = slider.current ?
      (x - (slider.current.getBoundingClientRect().x || slider.current.getBoundingClientRect().left)) / slider.current.getClientRects()[0].width : 0    
    audio.current && (audio.current.currentTime = (duration * keepRange(pos) * 100) / 100)
  }

  const downEvent = (e: MouseEvent | TouchEvent) => {
    if (e.target !== slider.current) return
    setIsDownEvent(true)
    setWasPlaying(playing)
    pauseAudio()
    updateBarPosition(e)
  }

  const moveEvent = (e: MouseEvent | TouchEvent) => {
    if (!isDownEvent) return
    if (e.type !== 'touchmove') e.preventDefault()
    updateBarPosition(e)
  }

  const upEvent = () => {
    isDownEvent && wasPlaying && playAudio()
    setIsDownEvent(false)
  }

  const toggleSpeed = () => {
    setSpeedIndex((speedIndex + 1) % speedOptions.length)
  }

  const rewind = () => {
    audio.current && (audio.current.currentTime = currentTime - 10)
  }

  const forward = () => {
    audio.current && (audio.current.currentTime = currentTime + 10)
  }

  const keyControl: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.defaultPrevented || !audio.current) return
    if (e.key === 'ArrowLeft') audio.current.currentTime = currentTime - 1
    if (e.key === 'ArrowRight') audio.current.currentTime = currentTime + 1
  }

  useImperativeHandle(ref, () => ({
    goToTime: (time: string) => {
      const a = time.split(':').reverse()
      const seconds = +a[0] + +a[1] * 60 + (a[2] ? +a[2] * 3600 : 0)
      audio.current && (audio.current.currentTime = seconds)
    }
  }))  

  const timeUpdate = () => {
    const ct = audio.current?.currentTime || 0
    setCurrentTime(ct)
    setOutputCurrentTime(formatTime(ct))
    setProgress((ct / duration) * 100)
  }

  const ended = () => {
    audio.current && (audio.current.currentTime = 0)
    pauseAudio()
  }

  return (
    <div className="relative px-4 py-5" aria-label="Audio Player" role="region">
      {/* Background */}
      <div
        className="absolute inset-0 rounded-3xl opacity-25 bg-gradient-to-tr from-white to-white/50 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      {/* Controls */}
      <div className="sm:flex items-center sm:space-x-3">
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          {/* Play / Pause button */}
          <button
            className="block rounded-full"
            aria-controls="audiofile"
            aria-label={playing ? 'Pause' : 'Play'}
            onClick={togglePlaying}
          >
            {/* Play icon */}
            <svg className={`${playing ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
              <defs>
                <linearGradient id="play-a" x1="87.87%" x2="12.333%" y1="20.647%" y2="76.5%">
                  <stop offset="0%" stopColor="#FFF" stopOpacity=".64" />
                  <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
              </defs>
              <path
                fill="url(#play-a)"
                fillRule="evenodd"
                d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20Zm-2.217-25.912A.5.5 0 0 0 17 14.5v11a.5.5 0 0 0 .783.412l8-5.5a.5.5 0 0 0 0-.824l-8-5.5Z"
              />
            </svg>
            {/* Pause icon */}
            <svg className={`${!playing ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true">
              <defs>
                <linearGradient id="pause-a" x1="87.87%" x2="12.333%" y1="20.647%" y2="76.5%">
                  <stop offset="0%" stopColor="#FFF" stopOpacity=".64" />
                  <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
              </defs>
              <path
                fill="url(#pause-a)"
                fillRule="evenodd"
                d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20Zm-2.8-26h-2.4c-.48 0-.8.343-.8.857v10.286c0 .514.32.857.8.857h2.4c.48 0 .8-.343.8-.857V14.857c0-.514-.32-.857-.8-.857Zm8 0h-2.4c-.48 0-.8.343-.8.857v10.286c0 .514.32.857.8.857h2.4c.48 0 .8-.343.8-.857V14.857c0-.514-.32-.857-.8-.857Z"
              />
            </svg>
          </button>

          {/* Rewind / Forward 10 secs buttons */}
          <div className="flex space-x-2">
            <button aria-label="Rewind 10 seconds" onClick={rewind}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true">
                <path
                  className="fill-white"
                  fillRule="nonzero"
                  d="m5.21 5.492 2.033-.566.536 1.927L1.258 8.67l.213-1.694-.04-.026.053-.08L2.097 2l1.984.25-.222 1.761a8.945 8.945 0 0 1 14.49 8.146l-.133.99-1.982-.266.133-.991A6.943 6.943 0 0 0 5.211 5.492Zm10.008 9.392.564-.826 1.652 1.127-.564.826c-.342.5-.734.965-1.17 1.387l-.718.695-1.39-1.438.719-.695c.338-.327.642-.688.907-1.076ZM4.91 11.929v5.09H3.681v-3.942h-.03l-1.138.696V12.71l1.255-.78H4.91Zm3.161 5.215c-1.332 0-2.155-.987-2.15-2.662.003-1.673.818-2.623 2.15-2.623 1.333 0 2.155.952 2.153 2.623-.003 1.68-.82 2.665-2.153 2.662Zm0-1.007c.532 0 .89-.532.888-1.655-.003-1.101-.358-1.623-.888-1.623-.527 0-.882.522-.885 1.623-.005 1.123.356 1.655.885 1.655Z"
                />
              </svg>
            </button>

            <button aria-label="Fast-forward 10 seconds" onClick={forward}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true">
                <path
                  className="fill-white"
                  fillRule="nonzero"
                  d="M10.47 11.929v5.09H9.24v-3.942h-.03l-1.138.696V12.71l1.255-.78h1.141Zm3.16 5.215c-1.332 0-2.155-.987-2.15-2.662.003-1.673.818-2.623 2.15-2.623 1.333 0 2.156.952 2.153 2.623-.002 1.68-.82 2.665-2.153 2.662Zm0-1.007c.532 0 .89-.532.888-1.655-.003-1.101-.358-1.623-.888-1.623-.527 0-.882.522-.884 1.623-.005 1.123.355 1.655.884 1.655Zm.59-10.645A6.944 6.944 0 0 0 3.062 11.89l.133.991-1.982.267-.134-.991A8.943 8.943 0 0 1 15.57 4.01L15.35 2.25 17.333 2l.613 4.87.052.08-.039.026.213 1.694-6.522-1.817.537-1.927 2.032.566ZM4.211 14.884c.265.388.569.749.907 1.076l.72.695-1.39 1.438-.72-.695a8.932 8.932 0 0 1-1.17-1.387l-.563-.826 1.652-1.127.564.826Z"
                />
              </svg>
            </button>
          </div>

          {/* Playback speed */}
          <button aria-label="Playback speed" onClick={toggleSpeed}>
            <div className="flex items-center justify-center h-5 w-6 bg-white bg-opacity-30 rounded text-center text-[10px] text-white font-bold">
              {speedOutput.current[speedIndex]}
            </div>
          </button>
        </div>

        <div className="grow flex items-center space-x-3">
          {/* Seek bar */}
          <div
            className="grow bg-white bg-opacity-50 overflow-hidden"
            ref={slider}
            tabIndex={0}
            role="slider"
            aria-valuetext="Seek audio bar"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={Math.floor(currentTime)}
            onKeyDown={keyControl}
          >
            <div className="h-2 bg-gradient-to-bl from-white pointer-events-none" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Time */}
          <div className="flex items-center text-xs font-medium text-white space-x-1.5 tabular-nums">
            <span>{outputCurrentTime}</span>
            <span className="w-px h-4 bg-white bg-opacity-30" aria-hidden="true"></span>
            <span>{outputDuration}</span>
          </div>
        </div>
      </div>

      <audio
        id="audiofile"
        src={src}
        ref={audio}
        onLoadedMetadata={loadedMetadata}
        onTimeUpdate={timeUpdate}
        onEnded={ended}
      ></audio>
    </div>            
  )  
}

const AudioPlayer = forwardRef(AudioPlayerComponent)

export default AudioPlayer
