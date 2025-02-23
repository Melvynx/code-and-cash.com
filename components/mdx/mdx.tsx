import { useMDXComponent } from 'next-contentlayer/hooks'
import AudioBookmark from './audio-bookmark'
import Contributor from './contributor'

const mdxComponents = {
  AudioBookmark: AudioBookmark,
  Contributor: Contributor
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose text-slate-500 max-w-none prose-p:leading-normal prose-headings:font-hkgrotesk prose-headings:font-extrabold prose-headings:text-slate-800 prose-a:font-medium prose-a:text-slate-800 prose-a:underline hover:prose-a:no-underline prose-strong:text-slate-800 prose-code:text-slate-800 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24 prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-3xl md:prose-h2:text-4xl prose-h3:text-3xl">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
