import { cn } from '../../utils/cn'
import Icon from '../ui/Icon/Icon'

type Props = {
  data: {
    icon: string
    title: string
    description: string
  }
  className?: string
}

function DescriptionCard({
  data: { icon, title, description },
  className,
}: Props) {
  return (
    <div
      className={cn(
        'cursor-grab flex flex-col items-center justify-center rounded-lg border border-[#EDEDED] px-[35px] text-(--color-blue)',
        className,
      )}
    >
      <Icon name={icon} className="h-[51px]" />
      <h3 className="text-[22px] leading-[40px] tracking-[4%]">{title}</h3>
      <p className="text-[15px] leading-[23px] tracking-[3%] text-(--color-text-1) user-select-none">
        {description}
      </p>
    </div>
  )
}

export default DescriptionCard
