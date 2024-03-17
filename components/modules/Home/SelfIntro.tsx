import Image from 'next/image';
import { WithClassName } from '@/types/UI';

import mockFaqs from '@/data/intro-faqs.json';
import DrawnStar from '@/assets/drawn-star.svg';

import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '@/components/elements/Accordion';

const SelfIntro = ({ className }: WithClassName) => (
  <>
    <div className="grid gap-12 lg:gap-40 grid-cols-1 lg:grid-cols-2">
      <article className="flex flex-col">
        <h3 className="heading-2">Hello! I am Donald McDonald.</h3>
        <p className="mt-4 subtitle">
          A connoisseur of cityscapes and a storyteller through the lens, based in the vibrant heart of
          London.{' '}
        </p>
        <p className="subtitle mt-8">
          With over a decade of experience, I have been capturing the essence of urban life, one frame at a
          time.
        </p>
        <Accordion type="single" collapsible className="w-full mt-16">
          {mockFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="w-11/12">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
      <div className="relative h-[50rem] border-8 border-l-0 border-b-0 before:absolute before:bg-neutral-100 before:-top-4 before:left-0 before:h-8 before:w-16 border-yellow-400 after:absolute after:bg-neutral-100 after:bottom-0 after:-right-4 after:h-16 after:w-4 w-full">
        <DrawnStar className="absolute -top-12 z-20 -left-12" />
        <Image src="/self.webp" alt="G. Photographer" fill className="object-cover" />
      </div>
    </div>
  </>
);

export default SelfIntro;
