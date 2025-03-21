import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import { cn } from '../../../utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'group relative cursor-pointer font-normal transition duration-300 disabled:opacity-50 will-change-transform',
  {
    variants: {
      variant: {
        cta: 'w-full max-w-[370px] bg-(--color-blue) text-white py-4  text-lg hover:shadow-2xl hover:translate-y-[-2px] active:shadow-2xl active:translate-y-[-2px] group flex justify-center items-center gap-4 rounded-[5px] transition-all duration-300 ease-in-out font-suisse',
        icon: 'flex items-center justify-center bg-transparent group-hover:scale-105 transition-transform duration-300 ease-in-out',
      },
    },
    defaultVariants: {
      variant: 'cta',
    },
  },
)

interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
  children: ReactNode
  onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, type, children, className, onClick, ...props },
  ref,
) {
  return (
    <button
      type={type}
      ref={ref}
      className={cn(buttonStyles({ variant }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
      {variant === 'cta' && (
        <div className="h-[10px] w-6 origin-left transition duration-300 ease-in-out group-active:scale-x-[120%]">
          <svg
            viewBox="0 0 23 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781H0V6.06226H19.0205L16.6372 8.4978L18.1072 10Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </button>
  )
})
export { Button as default }
