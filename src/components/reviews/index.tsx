import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import reviewsImages from '../../data/reviewsImages.json'
import ReviewCard from './ReviewCard'
import { cn } from '../../utils/cn'
import Icon from '../ui/Icon/Icon'
import './index.css'
import Button from '../ui/button'
import TotalReviewsStr from '../ui/totalReviewsStr'

type Props = { reviewsData: IReview[] }

function Reviews({ reviewsData }: Props) {
  const totalReviews = reviewsData.length * 97
  return (
    <section className="container2">
      <div className="mt-[59px] md:mt-[74px]">
        <h2 className="section-title mt-[19px] md:mt-[25px]">
          What are our fans saying?
        </h2>
        <p className="mx-auto mt-[19px] w-full max-w-[613px] px-6 text-[15px] leading-[23px] tracking-[3%] text-(--color-text-1) md:mt-[25px] md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
        <div className="mt-[42px] overflow-x-clip md:mt-[55px]">
          <Splide
            hasTrack={false}
            aria-label="models slider"
            className="w-full"
            options={{
              type: 'loop',
              perPage: 11,
              autoplay: true,
              interval: 3000,
              arrows: false,
              perMove: 1,
              pauseOnHover: true,
              pagination: false,
              gap: 5,
              breakpoints: {
                768: {
                  perPage: 4,
                  gap: 4,
                  pauseOnHover: false,
                },
              },
            }}
          >
            <SplideTrack className="!overflow-visible hover:!z-[99999]">
              {reviewsImages.slice(0, 11).map((img) => (
                <SplideSlide
                  key={img}
                  className="!cursor-pointer !transition !duration-300 hover:!z-[99999] hover:!scale-300"
                >
                  <img src={img} alt="Happy client image" />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
          <Splide
            hasTrack={false}
            aria-label="models slider overflow-hidden"
            className="mt-1 w-full md:mt-[5px]"
            options={{
              type: 'loop',
              perPage: 11,
              autoplay: true,
              interval: 3000,
              arrows: false,
              perMove: 1,
              pagination: false,
              direction: 'rtl',
              gap: 5,
              pauseOnHover: true,
              breakpoints: {
                768: {
                  perPage: 4,
                  gap: 4,
                  pauseOnHover: false,
                },
              },
            }}
          >
            <SplideTrack className="!overflow-visible hover:!z-[99999]">
              {reviewsImages.slice(11).map((img) => (
                <SplideSlide
                  key={img}
                  className="!cursor-pointer !transition !duration-300 hover:!z-[99999] hover:!scale-300"
                >
                  <img src={img} alt="Happy client image" />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
        <div className="mt-[38px] md:mt-[77px] md:px-6">
          <Splide
            hasTrack={false}
            aria-label="models slider"
            className="mx-auto w-[353px] md:w-full md:max-w-[1258px]"
            options={{
              perPage: 3,
              rewind: true,
              perMove: 1,
              pagination: false,
              gap: 41,
              breakpoints: {
                768: {
                  perPage: 1,
                },
              },
              classes: {
                pagination: 'splide__pagination reviews__pagination',
                page: 'splide__pagination__page reviews__pagination-page',
              },
            }}
          >
            <SplideTrack className="mx-auto w-[85.2%] md:w-[87.2%]">
              {reviewsData.map((item, index) => (
                <SplideSlide key={index}>
                  <ReviewCard
                    key={item.id}
                    reviewData={item}
                    isExpended={true}
                    className="mx-auto p-[30px] md:mx-0 md:w-full md:px-[8%]"
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows !w-full">
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
        </div>
        <div className="mt-[61px] flex w-full flex-col items-center md:mt-[95px]">
          <Button variant="cta" className="">
            <a href="#">Customize Your Outfit</a>
          </Button>

          <TotalReviewsStr totalReviews={totalReviews} />
        </div>
      </div>
    </section>
  )
}

export default Reviews
