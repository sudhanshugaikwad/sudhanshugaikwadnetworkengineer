import type { ComponentProps } from 'react'
import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu'

type NavigationMenuProps = ComponentProps<typeof NavigationMenuPrimitive.Root>
type NavigationMenuListProps = ComponentProps<typeof NavigationMenuPrimitive.List>
type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuPrimitive.Item>
type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>

export function NavigationMenu(props: NavigationMenuProps) {
  return <NavigationMenuPrimitive.Root data-slot="navigation-menu" {...props} />
}

export function NavigationMenuList(props: NavigationMenuListProps) {
  return <NavigationMenuPrimitive.List data-slot="navigation-menu-list" {...props} />
}

export function NavigationMenuItem(props: NavigationMenuItemProps) {
  return <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />
}

export function NavigationMenuLink(props: NavigationMenuLinkProps) {
  return <NavigationMenuPrimitive.Link data-slot="navigation-menu-link" {...props} />
}