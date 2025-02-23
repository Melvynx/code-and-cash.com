import { createContext, useContext } from 'react'

type AudioContextType = {
  goToTime: (time: string) => void
}

const AudioContext = createContext<AudioContextType>({
  goToTime: () => { },
})

export default AudioContext

export const useAudioContext = () => useContext(AudioContext)