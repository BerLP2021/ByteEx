import { useEffect, useState } from 'react'
import Loading from '../ui/loading'
import AboutData from '../../data/about.json'
import Button from '../ui/button'

function About() {
  const [about, setAbout] = useState<IAbout>()
  useEffect(() => {
    setTimeout(() => setAbout(AboutData), 500)
  }, [])

  if (!about) return <Loading />

  return (
    <section className="container2">
      <div className="flex flex-col items-center justify-center bg-[#F0EEEF] px-[11%] py-[39px_53px] lg:flex-row lg:items-start lg:gap-[clamp(40px,calc(40px+131*(100vw-768px)/696),171px)] lg:px-0 lg:py-[113px_92px]">
        <div className="relative mt-[51px] w-[58%] md:basis-[50%] lg:mt-5 lg:w-full lg:max-w-[380px]">
          <img
            src={about.images.top}
            alt=""
            className="absolute top-0 aspect-square w-[43%] -translate-x-1/2 -translate-y-1/4 border-4 border-white object-cover lg:-translate-y-1/2"
          />
          <img
            src={about.images.main}
            alt="Be your best self image"
            className="aspect-[0.77] h-auto w-full object-cover lg:aspect-[0.67]"
          />
          <img
            src={about.images.bottom}
            alt=""
            className="absolute right-0 bottom-0 aspect-square w-[46%] translate-x-1/2 translate-y-1/4 border-4 border-white object-cover lg:w-[34%] lg:translate-x-1/2 lg:translate-y-1/2"
          />
        </div>
        <div className="contents max-w-[620px] text-left lg:block lg:basis-[42vw]">
          <h2 className="section-title -order-2 text-center !text-[#2A2996] md:!text-(--color-blue) lg:text-left">
            {about.title}
          </h2>
          <div className="mt-[75px] space-y-[23px] lg:mt-[31px] lg:w-full">
            {about.content.map((p, i) => (
              <p
                className="text-[15px] leading-[23px] tracking-[3%] text-(--color-text-2)"
                key={i}
              >
                {p}
              </p>
            ))}
          </div>
          <Button variant="cta" className="mt-8 hidden lg:flex">
            <a href="#">Customize Your Outfit</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About
