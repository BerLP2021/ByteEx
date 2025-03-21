import { cn } from '../../../utils/cn'
interface IconProps {
  name: string
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={cn('h-full w-full [color:currentColor]', className)}>
      <use href={`src/assets/sprite.svg#${name}`} />
    </svg>
  )
}

export default Icon
