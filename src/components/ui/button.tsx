import type { ComponentProps } from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'

type ButtonProps = Omit<ComponentProps<typeof ButtonPrimitive>, 'className'> & {
  className?: string
  variant?: 'primary' | 'outline'
  size?: 'default' | 'sm'
}

export function Button({ className = '', variant = 'outline', size = 'default', ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={`ui-button ui-button-${variant} ui-button-${size} ${className}`}
      {...props}
    />
  )
}