import { Container } from '@/components/elements/Container';

import Underline from '@/assets/underline.svg';
import { FadeIn, FadeInStagger } from '@/components/elements/FadeIn';
import { Button } from '@/components/elements/Button';
import Link from 'next/link';
import JourneyBento from '@/components/modules/Home/JourneyBento';
import SelfIntro from '@/components/modules/Home/SelfIntro';

const Home = () => {
  return (
    <Container>
      <section className="apply-py">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <FadeIn>
            <h2 className="heading-1 mx-auto text-neutral-800 lg:w-1/2 w-full">
              Urban stories{' '}
              <span className="relative">
                through the lens <Underline className="absolute right-0" />
              </span>
            </h2>
            <p className="subtitle tracking-widest mt-12">Capturing the unseen rhythms of the city.</p>
            <Button asChild className="mt-12">
              <Link href="#journey">Discover my journey</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
      <section className="apply-py">
        <JourneyBento className="h-screen" />
      </section>

      <section id="#journey" className="apply-py">
        <SelfIntro />
      </section>
    </Container>
  );
};

export default Home;
