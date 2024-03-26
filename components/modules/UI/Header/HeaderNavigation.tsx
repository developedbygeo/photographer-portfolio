import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/elements/NavigationMenu';

import { NAVIGATION_LINKS } from '@/data/constants';
import HeaderListItem from '@/components/modules/UI/Header/HeaderListItem';
import { WithClassName } from '@/types/UI';

const HeaderNavigation = ({ className }: WithClassName) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <h2 className="sr-only">Header Navigation</h2>
        {NAVIGATION_LINKS.map((link) => {
          const doesLinkHaveChildren =
            link.hasChildren && link.childrenLinks && link.childrenLinks.length > 0;

          if (doesLinkHaveChildren) {
            return (
              <NavigationMenuItem key={link.key}>
                <NavigationMenuTrigger className="first:pl-0">{link.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {link.childrenLinks.map((childLink) => {
                      return (
                        <HeaderListItem
                          className=""
                          key={childLink.key}
                          title={childLink.name}
                          href={childLink.url}
                        >
                          {childLink.description}
                        </HeaderListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={link.key}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default HeaderNavigation;
