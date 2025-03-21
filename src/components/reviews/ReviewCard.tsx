import { cn } from '../../utils/cn'
import Stars from '../ui/stars'

type Props = {
  reviewData: IReview
  totalReviews: number
  className?: string
}

function ReviewCard({
  reviewData: { userName, userAvatar, rate, reviewDescription },
  totalReviews,
  className,
}: Props) {
  const totalReviewsStr = `One of ${Math.floor(totalReviews / 10) * 10}+ 5 Star Reviews Online`
  return (
    <div
      className={cn(
        'grid grid-cols-[39px_1fr] items-center gap-x-[14px] gap-y-0 rounded-lg border border-[#EDEDED] bg-white text-(--color-text-1) shadow-[0px_3px_10px_rgba(0,0,0,0.08)] md:grid-cols-[39px_auto_1fr] md:gap-[12px]',
        className,
      )}
    >
      <img
        src={userAvatar}
        alt={userName + "'s avatar"}
        className="row-span-2 rounded-full object-cover md:row-span-1"
      />
      <p className="col-start-2 row-start-2 pr-1 text-left text-[15px] md:row-start-1">
        {userName}
      </p>
      <div className="col-start-2 flex items-center gap-2 md:col-start-3">
        <Stars amount={rate} />
        <p className="font-suisse flex-1 text-left text-[11px] md:leading-[20px]">
          {totalReviewsStr}
        </p>
      </div>
      <p className="font-suisse col-span-3 mt-3 line-clamp-2 text-left text-[12px] leading-[23px] text-wrap text-ellipsis md:mt-0 xl:line-clamp-3 2xl:line-clamp-4">
        {reviewDescription}
      </p>
    </div>
  )
}

export default ReviewCard
