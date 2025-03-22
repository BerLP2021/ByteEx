import { cn } from '../../utils/cn'
import Stars from '../ui/stars'

type Props = {
  reviewData: IReview
  isExpended?: boolean
  totalReviews?: number
  className?: string
}

function ReviewCard({
  reviewData: { userName, userAvatar, rate, reviewDescription },
  totalReviews,
  isExpended = false,
  className,
}: Props) {
  const totalReviewsStr = totalReviews
    ? `One of ${Math.floor(totalReviews / 10) * 10}+ 5 Star Reviews Online`
    : null
  return (
    <div
      className={cn(
        'grid items-center gap-x-[14px] gap-y-0 rounded-lg border border-[#EDEDED] bg-white text-(--color-text-1) shadow-[0px_3px_10px_rgba(0,0,0,0.08)]',
        totalReviewsStr
          ? 'grid-cols-[39px_auto] md:grid-cols-[39px_auto_1fr]'
          : 'grid-cols-[39px_auto]',
        className,
      )}
    >
      <img
        src={userAvatar}
        alt={userName + "'s avatar"}
        className={cn(
          'rounded-full object-cover',
          totalReviewsStr ? 'row-span-2 md:row-span-1' : 'row-span-2',
        )}
      />
      <p
        className={cn(
          'col-start-2 pr-1 text-left text-[15px]',
          totalReviewsStr ? 'row-start-2 md:row-start-1' : 'row-start-2',
        )}
      >
        {userName}
      </p>
      <div
        className={cn(
          'col-start-2 flex items-center gap-2',
          totalReviewsStr ? 'col-span-1 md:col-start-3' : 'col-span-1',
        )}
      >
        <Stars amount={rate} />
        {totalReviewsStr && (
          <p className="font-suisse flex-1 text-left text-[11px] md:leading-[20px]">
            {totalReviewsStr}
          </p>
        )}
      </div>
      <p
        className={cn(
          'font-suisse mt-3 text-left text-[12px] leading-[23px] text-wrap text-ellipsis md:mt-0',
          isExpended ? '' : 'line-clamp-2 xl:line-clamp-3 2xl:line-clamp-4',
          totalReviewsStr ? 'col-span-2 md:col-span-3' : 'col-span-2',
        )}
      >
        {reviewDescription}
      </p>
    </div>
  )
}

export default ReviewCard
