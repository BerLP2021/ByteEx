import React, { useEffect, useState } from 'react'
import Button from '../ui/button'
import TotalReviewsStr from '../ui/totalReviewsStr'
import finalCTAData from '@/data/finalCTA.json'
import { finalData } from '@/data/finalCTA.js'
import Loading from '../ui/loading'
import Icon from '../ui/Icon/Icon'

type Props = { totalReviews: number }

function FinalCTA({ totalReviews }: Props) {
  const [data, setData] = useState<IFinalCta>()
  useEffect(() => {
    setTimeout(() => {
      setData(finalCTAData as IFinalCta)
    }, 500)
  })
  if (!data) {
    return <Loading />
  }
  return (
    <section className="container2">
      <div className="bg-[linear-gradient(0deg,#F9F0E5_0%,rgba(249,240,229,0.18)_43.05%,rgba(249,240,229,0)_100%)] bg-bottom py-[52px_58px] md:py-[84px]">
        <h2 className="section-title">Find something you love.</h2>
        <p className="mt-[9px] text-[15px] leading-[22px] tracking-[3%] text-(--color-text-1) md:mt-3">
          Click below to browse our collection!
        </p>
        <div className="mx-auto mt-[31px] flex w-full flex-nowrap items-center justify-center md:mt-11 md:w-[56%] md:self-stretch">
          <span className="relative z-1 -mr-[9.2%] aspect-[0.705] min-h-min w-[18.4%] shrink-0 bg-[linear-gradient(0deg,rgba(249,240,229,0.7)0%,rgba(249,240,229,0.217)100%)]" />
          {data.collections.map((item, index) => (
            <a
              key={index}
              className="relative w-[28.8%] shrink-0 transition-all duration-300 ease-in-out not-nth-3:z-2 hover:z-10 hover:scale-[1.3] hover:shadow-2xl active:scale-[0.95] nth-2:mr-[-6%] hover:nth-2:translate-x-[-50%] nth-3:z-3 nth-3:w-[36%] nth-4:ml-[-6%] hover:nth-4:translate-x-[50%] md:nth-2:mr-0 md:nth-4:ml-0"
              title={item.collection_name}
              href={item.link}
            >
              <img
                src={item.image}
                alt={item.collection_name}
                className="shrink-0 border-white md:border-4"
              />
            </a>
          ))}
          <span className="relative z-0 -ml-[9.2%] aspect-[0.705] min-h-min w-[18.4%] shrink-0 bg-[linear-gradient(0deg,rgba(249,240,229,0.7)0%,rgba(249,240,229,0.217)100%)]" />
        </div>
        <div className="mt-[52px] flex w-full flex-col items-center md:mt-[58px]">
          <Button variant="cta" className="">
            <a href="#">Customize Your Outfit</a>
          </Button>

          <TotalReviewsStr totalReviews={totalReviews} />
        </div>
        <div className="mt-3 hidden items-center justify-center gap-2.5 md:flex">
          <div className="flex items-center gap-1 text-[#1FAD40] md:text-[10px] md:leading-[17px] md:tracking-[4%]">
            <Icon name="clock" className="h-[11px] w-[11px]" />
            Ships in 1-2 Days
          </div>
          <img src="/images/CTA/payments.png" alt="" className="h-[22px]" />
        </div>
        <div className="mt-4 hidden items-center justify-center divide-x-1 text-left text-(--color-text-1) md:flex md:text-[10px] md:leading-[17px] md:tracking-[4%]">
          {finalData.map(({ icon, id, title }) => (
            <div
              className="flex w-full max-w-[180px] items-center gap-3 px-[23px] first:pl-0 last:pr-0"
              key={id}
            >
              <div className="rounded-full bg-[#66666610]">
                <Icon name={icon} className="h-[33px] w-[33px]" />
              </div>
              <div>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
