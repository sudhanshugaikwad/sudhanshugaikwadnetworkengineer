import type { ComponentProps, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'

type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root>
type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>
type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger> & {
  children: ReactNode
}
type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Panel> & {
  children: ReactNode
}

export function Accordion(props: AccordionProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={className}
      {...props}
    />
  )
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={className}
        {...props}
      >
        {children}
        <ChevronDown className="accordion-chevron" size={18} aria-hidden="true" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={className}
      {...props}
    >
      {children}
    </AccordionPrimitive.Panel>
  )
}