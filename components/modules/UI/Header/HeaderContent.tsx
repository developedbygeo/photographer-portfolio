import Link from 'next/link';
import { WithClassName } from '@/types/UI';

import CustomLogo from '@/assets/logo.svg';

import { Container } from '@/components/elements/Container';
import HeaderNavigation from '@/components/modules/UI/Header/HeaderNavigation';
import MobileMenu from '@/components/modules/UI/MobileMenu/MobileMenu';
import SocialMedia from '@/components/modules/UI/SocialMedia';

const HeaderContent = ({ className }: WithClassName) => {
  return (
    <Container
      className="flex items-center relative justify-between py-2"
      wrapperClassName="flex items-center justify-between py-2 w-full"
    >
      <MobileMenu className="lg:hidden" />
      <HeaderNavigation className="hidden lg:block" />
      <Link className="absolute left-1/2 top-1/2 -translate-y-1/2" href="/">
        <CustomLogo className="size-12" />
      </Link>
      <SocialMedia className="hidden lg:flex" />
    </Container>
  );
};

export default HeaderContent;
