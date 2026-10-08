import type { ComponentProps } from 'react'

type CardProps = ComponentProps<'article'>
type CardSectionProps = ComponentProps<'div'>
type CardTitleProps = ComponentProps<'h3'>
type CardDescriptionProps = ComponentProps<'p'>

export function Card({ className = '', ...props }: CardProps) {
  return <article data-slot="card" className={`ui-card ${className}`} {...props} />
}

export function CardHeader({ className = '', ...props }: CardSectionProps) {
  return <div data-slot="card-header" className={`ui-card-header ${className}`} {...props} />
}

export function CardTitle({ className = '', ...props }: CardTitleProps) {
  return <h3 data-slot="card-title" className={`ui-card-title ${className}`} {...props} />
}

export function CardDescription({ className = '', ...props }: CardDescriptionProps) {
  return <p data-slot="card-description" className={`ui-card-description ${className}`} {...props} />
}

export function CardContent({ className = '', ...props }: CardSectionProps) {
  return <div data-slot="card-content" className={`ui-card-content ${className}`} {...props} />
}

export function CardFooter({ className = '', ...props }: CardSectionProps) {
  return <div data-slot="card-footer" className={`ui-card-footer ${className}`} {...props} />
}