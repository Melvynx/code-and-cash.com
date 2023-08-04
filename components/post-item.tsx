import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PlaySvg from '@/public/images/play-02.svg'

export default function PostItem({ ...props }) {
  return (
    <div
      className="sm:flex items-center p-5 border-b border-slate-100"
      style={!['All', props.category].includes(props.selectedCategory) ? { display: 'none' } : {}}
    >
      <div className="flex items-start mb-4 sm:mb-0">
        <Image className="shrink-0 rounded ml-5 sm:ml-0 sm:mr-5 order-1 sm:order-none" src={props.image} width={88} height={88} alt={props.title} />
        <div>
          <h3 className="font-hkgrotesk font-extrabold text-lg mb-1">
            <Link className="text-slate-800 hover:text-blue-500 transition duration-150 ease-in-out" href={props.slug}>{props.title}</Link>
          </h3>
          <div className="font-hkgrotesk font-medium text-sm text-slate-500 mb-1">
            <a className="text-blue-500 hover:underline" href="#0">{props.category}</a> <span className="text-slate-300">·</span>  <PostDate dateString={props.publishedAt} /> <span className="text-slate-300">·</span> Episode {props.episode}
          </div>
          <div className="text-sm text-slate-500">{props.summary}</div>
        </div>
      </div>
      <div className="shrink-0 sm:ml-5">
        <Link href={props.slug} aria-label="play">
          <Image src={PlaySvg} width={40} height={40} alt="Play" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
