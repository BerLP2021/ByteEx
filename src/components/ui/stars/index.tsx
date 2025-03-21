import { cn } from '../../../utils/cn'
import Icon from '../Icon/Icon'

type Props = {
  amount: number
  className?: string
}

function Stars({ amount, className = 'w-[60px] h-[10px] gap-0.5' }: Props) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      {Array.from({ length: amount }).map((_, index) => (
        <Icon name="star" key={index} />
      ))}
    </div>
  )
}

export default Stars
