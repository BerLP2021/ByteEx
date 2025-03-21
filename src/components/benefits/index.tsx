import { useEffect, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Intersection } from '@splidejs/splide-extension-intersection'
import ReviewCard from '../reviews/ReviewCard'
import Icon from '../ui/Icon/Icon'
import Button from '../ui/button'
import brandsMockData from '../../data/brands.json'
import { cn } from '../../utils/cn'
import productsMockData from '../../data/products.json'
import Loading from '../ui/loading'
import './index.css'
import TotalReviewsStr from '../ui/totalReviewsStr'

type Props = {
  totalReviews: number
  userReviewDemo: IReview
  benefitsData: IBenefitItem[]
}

function Benefits({ userReviewDemo, totalReviews, benefitsData }: Props) {
  const [brands, setBrands] = useState<
    {
      id: string
      src: string
      alt: string
    }[]
  >([])

  const [product, setProduct] = useState<{
    id: string
    title: string
    description: string
    images: string[]
  }>()

  useEffect(() => {
    setTimeout(() => {
      setBrands(brandsMockData)
      setProduct(productsMockData[0])
    }, 500)
  }, [])

  if (!brands.length || !product) {
    return <Loading />
  }

  return (
    <section className="container2 relative">
      <div className="bg-[linear-gradient(180deg,#F9F0E5_0%,rgba(249,240,229,0.18)43.05%,rgba(249,240,229,0)100%)] pb-[43px] md:pb-[86px]">
        <ReviewCard
          reviewData={userReviewDemo}
          totalReviews={totalReviews}
          className="absolute mx-auto max-w-[388px] -translate-y-1/2 px-[11px] py-4 md:max-w-[416px] md:px-5"
        />
        <h2 className="py-[92px_17px] text-[#868787] md:pt-[77px]">
          as seen in
        </h2>
        <div className="w-full px-4 md:max-w-[1255px]">
          <Splide
            aria-label="featured brands"
            options={{
              type: 'loop',
              perPage: 5,
              arrows: false,
              autoplay: true,
              interval: 3000,
              omitEnd: true,
              focus: 0,
              breakpoints: {
                768: {
                  perPage: 3,
                },
              },
              classes: {
                pagination: 'splide__pagination custom__pagination',
              },
            }}
          >
            {brands.map((item, index) => (
              <SplideSlide key={index}>
                <img src={item.src} alt={item.alt} className="mx-[0px]" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="mt-[42px] grid items-center gap-x-10 md:mt-[113px] md:grid-cols-[44.7%_1fr] md:px-[10%_5%] lg:items-start">
          <div className="col-span-1 contents w-full md:block md:px-0">
            <h2 className="section-title -order-2 px-12 md:px-0 md:text-left">
              Loungewear you can be proud of.
            </h2>
            <ul className="mt-[61px] space-y-[17px] md:mt-[74px]">
              {benefitsData.map((item, index) => (
                <li
                  key={index}
                  className="mx-auto max-w-[78.5%] items-center space-y-5 gap-x-8 gap-y-1 text-center md:mx-0 md:grid md:max-w-none md:grid-cols-[42px_auto] md:space-y-0 md:text-left"
                >
                  <div className="bg-beige mx-auto mt-2 flex aspect-square w-[42px] items-center justify-center self-start rounded-full">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="text-[22px] leading-[1.1] tracking-[4%] text-(--color-blue)">
                    {item.title}
                  </h3>
                  <p className="col-start-2 text-[15px] leading-[23px] tracking-[3%] text-(--color-text-2)">
                    {item.description}
                  </p>
                  {benefitsData.length - 1 !== index && (
                    <hr className="mx-auto my-[41px_31px] w-full max-w-[334px] text-[#c4c4c450] md:hidden" />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center md:hidden">
              <Button variant="cta" className="mt-[43px]">
                <a href="#">Customize Your Outfit</a>
              </Button>

              <TotalReviewsStr totalReviews={totalReviews} />
            </div>
          </div>
          <div className="-order-1 col-span-1 mt-[25px] flex flex-col items-center justify-center md:order-0 md:mt-0">
            <Splide
              hasTrack={false}
              aria-label="models slider"
              options={{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                arrows: true,
                pagination: false,
                interval: 3000,
                width: 505,
                height: 650,
                autoplay: 'pause',
                focus: 0,
                breakpoints: {
                  768: {
                    width: 350,
                    height: 450,
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
                {product.images.map((item, index) => (
                  <SplideSlide key={index}>
                    <img
                      src={item}
                      alt={product.title + ' image №' + index}
                      className="mx-auto h-full w-[85%] object-cover"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
              <div className="splide__arrows !w-full">
                <button
                  className={cn(
                    'splide__arrow splide__arrow--prev',
                    '!left-0 !justify-start !bg-transparent',
                  )}
                >
                  <Icon name="arrow-slider" />
                </button>
                <button className="splide__arrow splide__arrow--next !right-0 !justify-end !bg-transparent">
                  <Icon name="arrow-slider" />
                </button>
              </div>
            </Splide>
            <p className="font-suisse mt-[7px] text-[13px] leading-[22px] tracking-[3%] text-(--color-text-1) md:mt-[13px]">
              {product.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
