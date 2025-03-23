import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Intersection } from '@splidejs/splide-extension-intersection'

import TotalReviewsStr from '../ui/totalReviewsStr'
import DescriptionCard from './DescriptionCard'
import Icon from '../ui/Icon/Icon'
import Button from '../ui/button'
import { cn } from '../../utils/cn'
import description from '../../data/description.json'

type Props = { totalReviews: number }

function Description({ totalReviews }: Props) {
  return (
    <section className="container2 section-title">
      <div className="flex flex-col items-center gap-7 md:gap-[46px] md:px-5">
        <h2 className="mt-[57px] md:mt-[79px]">Comfort made easy</h2>
        <Splide
          hasTrack={false}
          aria-label="slider with principles of our work"
          className="w-full max-w-[1097px]"
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            arrows: false,
            pagination: false,
            interval: 3000,
            gap: '41px',
            autoplay: 'pause',
            focus: 0,
            breakpoints: {
              768: {
                arrows: true,
                perPage: 1,
                perMove: 1,
                height: '288px',
                width: '353px',
              },
            },
            intersection: {
              inView: {
                autoplay: true,
              },
              outView: {
                autoplay: false,
              },
              threshold: 0.1,
            },
          }}
          extensions={{ Intersection }}
        >
          <SplideTrack>
            {description.map((item, index) => (
              <SplideSlide
                key={index}
                className="odd:bg-[#F0EEEF] even:bg-[#F9F0E6]"
              >
                <DescriptionCard
                  data={item}
                  className="mx-auto h-full w-[81.8%] md:aspect-[1.07] md:w-full"
                />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows !h-[16px] !w-full">
            <button
              className={cn(
                'splide__arrow splide__arrow--prev',
                '!-left-0 !justify-start !bg-transparent',
              )}
            >
              <Icon name="arrow-slider" className="!h-4 !w-4" />
            </button>
            <button className="splide__arrow splide__arrow--next !-right-0 !justify-end !bg-transparent">
              <Icon name="arrow-slider" className="!h-4 !w-4" />
            </button>
          </div>
        </Splide>
        <div className="mt-[13px] flex w-full flex-col items-center md:mt-[10px]">
          <Button variant="cta" className="">
            <a href="#">Customize Your Outfit</a>
          </Button>

          <TotalReviewsStr totalReviews={totalReviews} />
        </div>
      </div>
    </section>
  )
}

export default Description
