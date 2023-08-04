import Image from 'next/image'
import Testimonial01 from '@/public/images/testimonial-01.jpg'
import Testimonial02 from '@/public/images/testimonial-02.jpg'
import Testimonial03 from '@/public/images/testimonial-03.jpg'
import Testimonial04 from '@/public/images/testimonial-04.jpg'
import Testimonial05 from '@/public/images/testimonial-05.jpg'
import Testimonial06 from '@/public/images/testimonial-06.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold">Testimonials</h2>
          </div>

          {/* Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Item */}
            <div className="p-5 bg-slate-100 rounded-3xl odd:rotate-1 even:-rotate-1">
              <div className="flex items-start mb-4">
                <Image className="shrink-0 rounded-full mr-3" src={Testimonial01} width={48} height={48} alt="Testimonial 01" />
                <div>
                  <div className="font-hkgrotesk font-extrabold text-slate-800">Sarah Mendes</div>
                  <a className="font-hkgrotesk font-medium text-blue-500 hover:underline" href="#0">
                    @saramendes
                  </a>
                </div>
              </div>
              <div className="text-slate-500">
                "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new."
              </div>
            </div>
            {/* Item */}
            <div className="p-5 bg-slate-100 rounded-3xl odd:rotate-1 even:-rotate-1">
              <div className="flex items-start mb-4">
                <Image className="shrink-0 rounded-full mr-3" src={Testimonial02} width={48} height={48} alt="Testimonial 02" />
                <div>
                  <div className="font-hkgrotesk font-extrabold text-slate-800">Michał Rutt</div>
                  <a className="font-hkgrotesk font-medium text-blue-500 hover:underline" href="#0">
                    @michrutt
                  </a>
                </div>
              </div>
              <div className="text-slate-500">
                "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new."
              </div>
            </div>
            {/* Item */}
            <div className="p-5 bg-slate-100 rounded-3xl odd:rotate-1 even:-rotate-1">
              <div className="flex items-start mb-4">
                <Image className="shrink-0 rounded-full mr-3" src={Testimonial03} width={48} height={48} alt="Testimonial 03" />
                <div>
                  <div className="font-hkgrotesk font-extrabold text-slate-800">Lina James</div>
                  <a className="font-hkgrotesk font-medium text-blue-500 hover:underline" href="#0">
                    @linaj87
                  </a>
                </div>
              </div>
              <div className="text-slate-500">
                "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new."
              </div>
            </div>
            {/* Item */}
            <div className="p-5 bg-slate-100 rounded-3xl odd:rotate-1 even:-rotate-1">
              <div className="flex items-start mb-4">
                <Image className="shrink-0 rounded-full mr-3" src={Testimonial04} width={48} height={48} alt="Testimonial 04" />
                <div>
                  <div className="font-hkgrotesk font-extrabold text-slate-800">Abigail Boucher</div>
                  <a className="font-hkgrotesk font-medium text-blue-500 hover:underline" href="#0">
                    @AbbyBoucher
                  </a>
                </div>
              </div>
              <div className="text-slate-500">
                "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new."
              </div>
            </div>
            {/* Item */}
            <div className="p-5 bg-slate-100 rounded-3xl odd:rotate-1 even:-rotate-1">
              <div className="flex items-start mb-4">
                <Image className="shrink-0 rounded-full mr-3" src={Testimonial05} width={48} height={48} alt="Testimonial 05" />
                <div>
                  <div className="font-hkgrotesk font-extrabold text-slate-800">Emma Bostian</div>
                  <a className="font-hkgrotesk font-medium text-blue-500 hover:underline" href="#0">
                    @emmacode
                  </a>
                </div>
              </div>
              <div className="text-slate-500">
                "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new."
              </div>
            </div>
            {/* Item */}
            <div className="p-5 bg-slate-100 rounded-3xl odd:rotate-1 even:-rotate-1">
              <div className="flex items-start mb-4">
                <Image className="shrink-0 rounded-full mr-3" src={Testimonial06} width={48} height={48} alt="Testimonial 06" />
                <div>
                  <div className="font-hkgrotesk font-extrabold text-slate-800">Addy Osman</div>
                  <a className="font-hkgrotesk font-medium text-blue-500 hover:underline" href="#0">
                    @addyO
                  </a>
                </div>
              </div>
              <div className="text-slate-500">
                "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}