import React, { useEffect } from 'react'

import SavingItem from './SavingItem'
import Loading from '../ui/loading'
import infoBanner from '@/data/infoBanner.json'
import { infoBannerData } from '@/data/infoBanner.js'

function InfoBanner() {
  const [saving, setSaving] = React.useState<IInfoBannerItem[]>([])
  useEffect(() => {
    setTimeout(() => {
      setSaving(infoBanner as IInfoBannerItem[])
    }, 500)
  })
  if (!saving.length) {
    return <Loading />
  }
  return (
    <section className="container2">
      <div className="mt-[52px] bg-[#F0EEEF] py-[52px_32px] md:mt-[88px] md:py-[39px_56px]">
        <h2 className="text-[25px] leading-[40px] tracking-[4%] text-[#2A2996] md:text-(--color-blue)">
          Our total green impact
        </h2>
        <div className="md:divider-y-0 mt-[22px] flex flex-col items-center divide-y border-[#C4C4C450] md:mt-[18px] md:flex-row md:justify-center md:divide-x md:divide-y-0">
          {infoBannerData.map((item, index) => (
            <SavingItem
              key={index}
              index={index}
              data={{
                iconType: saving[index].type,
                measure: item.measure,
                value: saving[index].value,
                description: item.description,
              }}
              className={
                saving[index].type === 'energy' ? 'hidden md:block' : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default InfoBanner
