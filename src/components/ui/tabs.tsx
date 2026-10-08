import type { ComponentProps } from 'react'
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'

type TabsProps = ComponentProps<typeof TabsPrimitive.Root>
type TabsListProps = ComponentProps<typeof TabsPrimitive.List>
type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Tab>
type TabsContentProps = ComponentProps<typeof TabsPrimitive.Panel>

export function Tabs(props: TabsProps) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />
}

export function TabsList(props: TabsListProps) {
  return <TabsPrimitive.List data-slot="tabs-list" {...props} />
}

export function TabsTrigger(props: TabsTriggerProps) {
  return <TabsPrimitive.Tab data-slot="tabs-trigger" {...props} />
}

export function TabsContent(props: TabsContentProps) {
  return <TabsPrimitive.Panel data-slot="tabs-content" {...props} />
}