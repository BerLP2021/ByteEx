import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import faqData from '@/data/faq.json'
import Button from '../ui/button'
import TotalReviewsStr from '../ui/totalReviewsStr'
type Props = { totalReviews: number }

function Faq({ totalReviews }: Props) {
  const [faq, setFaq] = React.useState<IFaqItem[]>([])
  useEffect(() => {
    setTimeout(() => {
      setFaq(faqData)
    })
  })

  return (
    <section className="container2">
      <div className="mt-[68px] flex flex-col items-center justify-center lg:m-[clamp(40px,calc(40px+170*(100vw-1024px)/440),210px)_clamp(40px,calc(40px+100*(100vw-1024px)/440),140px)] lg:mt-[109px] lg:flex-row lg:items-start lg:gap-[clamp(40px,calc(40px+80*(100vw-1024px)/440),120px)]">
        <div className="w-full max-w-[600px] px-11 lg:px-0">
          <h2 className="section-title lg:text-left">
            Frequently asked questions.
          </h2>
          <Accordion type="single" collapsible className="mt-9 lg:mt-12">
            {faq.map((item, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className={index === 0 ? 'border-t' : ''}
              >
                <AccordionTrigger className="text-lg leading-6 tracking-[4%] text-(--color-blue)">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-[20px] tracking-[3%] text-(--color-text-1) lg:text-[15px] lg:leading-[22px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-[39px] flex w-full flex-col items-center lg:hidden">
            <Button variant="cta" className="">
              <a href="#">Customize Your Outfit</a>
            </Button>
            <TotalReviewsStr totalReviews={totalReviews} />
          </div>
        </div>
        <div className="hidden max-w-[400px] lg:block">
          <img
            src="images/faq/top.webp"
            alt="model image"
            className="relative z-0 ml-[57%] aspect-[167/253] w-[43%]"
          />
          <img
            src="images/faq/main.webp"
            alt="model image"
            className="relative z-10 -mt-[32.2%] ml-[20.6%] aspect-[227/355] w-[58.5%]"
          />
          <img
            src="images/faq/bottom.webp"
            alt="model image"
            className="relative z-0 -mt-[11.6%] aspect-[216/159] w-[55.7%]"
          />
        </div>
      </div>
    </section>
  )
}

export default Faq
