import Stars from '../stars'
import { cn } from '../../../utils/cn'

type Props = {
  totalReviews: number
  className?: string
}

function TotalReviewsStr({ totalReviews, className }: Props) {
  const totalReviewsStr = `Over ${Math.floor(totalReviews / 10) * 10}+ 5 Star Reviews Online`
  return (
    <div className={cn('mt-3 flex items-center gap-2', className)}>
      <Stars amount={5} className="h-[13px] w-[80px] gap-[3px]" />
      <p className="font-suisse flex-1 text-[12px] leading-[20px] tracking-[2%] text-(--color-text-3)">
        {totalReviewsStr}
      </p>
    </div>
  )
}

export default TotalReviewsStr
