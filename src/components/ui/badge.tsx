import type { ComponentProps } from 'react'

export type BadgeVariant = 'neutral' | 'completed' | 'in-progress' | 'planned' | 'featured'

type BadgeProps = ComponentProps<'span'> & {
  variant?: BadgeVariant
}

export function Badge({ className = '', variant = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={`ui-badge ${className}`}
      {...props}
    />
  )
}