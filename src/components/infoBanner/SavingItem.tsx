import { useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'

import NumberTicker, {
  NumberTickerRef,
} from '@/components/ui/fancy/components/text/basic-number-ticker'
import Icon from '../ui/Icon/Icon'
import { cn } from '@/utils/cn'

type Props = {
  data: {
    iconType: IInfoBannerItem['type']
    measure: string
    value: IInfoBannerItem['value']
    description: string
  }
  index: number
  className?: string
}

function SavingItem({
  data: { iconType, measure, value, description },
  index,
  className,
}: Props) {
  const itemRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<NumberTickerRef>(null)
  const inView = useInView(itemRef, { once: false })

  const measureString =
    measure !== 'day' ? measure : value % 10 === 1 ? 'day' : 'days'

  useEffect(() => {
    if (inView) {
      tickerRef.current?.startAnimation()
    }
  }, [inView])

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cn(
        'flex w-[66%] max-w-[282px] flex-col items-center py-[20px_16px] md:max-w-[259px] md:py-[8px_16px]',
        className,
      )}
    >
      <div className="mx-auto mb-[13px] flex aspect-square w-[42px] items-center justify-center self-start rounded-full bg-[#E2E2E2] text-[#6160D2] md:bg-[#E4E4E4] md:text-(--color-blue)">
        <Icon name={iconType} className="h-[42px] w-[42px]" />
      </div>
      <span className="text-[22px] leading-[20px] font-semibold tracking-[2%] text-nowrap overflow-ellipsis text-[#2A2996] md:text-(--color-blue)">
        <NumberTicker
          ref={tickerRef}
          from={Math.floor(value / 3)}
          target={value}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            type: 'tween',
            delay: index * 0.4,
          }}
          autoStart={false}
        />{' '}
        {measureString}
      </span>
      <p className="text-[14px] leading-[20px] tracking-[3%] text-nowrap overflow-ellipsis text-[#2A2996] md:text-(--color-blue)">
        {description}
      </p>
    </motion.div>
  )
}

export default SavingItem
