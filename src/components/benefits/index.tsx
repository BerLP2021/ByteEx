import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Intersection } from '@splidejs/splide-extension-intersection'
import { Options} from '@splidejs/splide';

import { useSplideWithThumbnails } from '@/hooks/useSplideWithThumbnails'
import TotalReviewsStr from '../ui/totalReviewsStr'
import ReviewCard from '../reviews/ReviewCard'
import Icon from '../ui/Icon/Icon'
import Button from '../ui/button'
import Loading from '../ui/loading'

import brandsMockData from '../../data/brands.json'
import productsMockData from '../../data/products.json'
import './index.css'
import { cn } from '@/utils/cn';

type SplideOptions = Options;

type Props = {
  totalReviews: number
  userReviewDemo: IReview
  benefitsData: IBenefitItem[]
}

const basicOptions: SplideOptions = {
  pagination: false,
  interval: 3000,
  focus: 0,
}
const mainOptions: SplideOptions = {
    type: 'loop',
  interval: 3000,
  autoplay: 'pause',
  width: 505,
  height: 650,
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
  ...basicOptions
};

const thumbnailOptions: SplideOptions = {
  fixedWidth: 60,
  fixedHeight: 60,
  isNavigation: true,
  arrows: false,
  breakpoints: {
    768: {
      fixedWidth: 40,
      fixedHeight: 40,
    },
  },
  ...basicOptions
};

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

 const { ref: mainRef, splide: mainSplide } = useSplideWithThumbnails(mainOptions, product?.images || []);
  const { ref: thumbnailsRef, splide: thumbnailsSplide } = useSplideWithThumbnails(thumbnailOptions, product?.images || []);

  // Синхронизация и монтирование
useEffect(() => {
    if (mainSplide.current && thumbnailsSplide.current && product?.images.length) {
      mainSplide.current.sync(thumbnailsSplide.current);
      mainSplide.current.mount( { Intersection });
      thumbnailsSplide.current.mount( );
    }
  }, [mainSplide, thumbnailsSplide, product]);
  

  useEffect(() => {
    setTimeout(() => {
      setBrands(brandsMockData)
      setProduct(productsMockData[0])
    }, 500)
  }, [])

  if (!product ) {
    return <Loading />
  }

  return (
    <section className="container2 relative">
      <div className="bg-[linear-gradient(180deg,#F9F0E5_0%,rgba(249,240,229,0.18)43.05%,rgba(249,240,229,0)100%)] pb-[43px] lg:pb-[86px]">
        {userReviewDemo ? (<ReviewCard
          reviewData={userReviewDemo}
          totalReviews={totalReviews}
          className="absolute left-[50%] w-full max-w-[388px] -translate-x-1/2 -translate-y-1/2 px-[11px] py-4 md:left-[7.25%] md:translate-x-0 lg:max-w-[416px] lg:px-5"
        />) : <Loading />}
        <h2 className="py-[92px_17px] text-[#868787] md:pt-[77px]">
          as seen in
        </h2>
        <div className="w-full px-4 md:max-w-[1255px]">
          {brands.length ? (<Splide
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
          </Splide>) : <Loading />}
        </div>
        <div className="mt-[42px] grid items-center gap-x-10 lg:mt-[113px] lg:grid-cols-[44.7%_1fr] lg:items-start lg:px-[10%_5%]">
          <div className="col-span-1 contents w-full lg:block lg:px-0">
            <h2 className="section-title -order-2 px-12 lg:px-0 lg:text-left">
              Loungewear you can be proud of.
            </h2>
            <ul className="mt-[61px] space-y-[17px] lg:mt-[74px]">
              {benefitsData.length ? (benefitsData.map((item, index) => (
                <li
                  key={index}
                  className="mx-auto max-w-[57%] items-center space-y-5 gap-x-8 gap-y-1 text-center lg:mx-0 lg:grid lg:max-w-[78.5%] lg:max-w-none lg:grid-cols-[42px_auto] lg:space-y-0 lg:text-left"
                >
                  <div className="bg-beige mx-auto mt-2 flex aspect-square w-[42px] items-center justify-center self-start rounded-full text-(--color-blue)">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="text-[22px] leading-[1.1] tracking-[4%] text-(--color-blue)">
                    {item.title}
                  </h3>
                  <p className="col-start-2 text-[15px] leading-[23px] tracking-[3%] text-(--color-text-2)">
                    {item.description}
                  </p>
                  {benefitsData.length - 1 !== index && (
                    <hr className="mx-auto my-[41px_31px] w-full max-w-[334px] text-[#c4c4c450] lg:hidden" />
                  )}
                </li>
              ))) : <Loading />}
            </ul>
            <div className="flex flex-col items-center md:hidden">
              <Button variant="cta" className="mt-[43px]">
                <a href="#">Customize Your Outfit</a>
              </Button>

              <TotalReviewsStr totalReviews={totalReviews} />
            </div>
          </div>
          <div className="-order-1 col-span-1 mt-[25px] flex flex-col items-center justify-center lg:order-0 lg:mt-0">
            {product ? (
              <div className='relative'>
                <div ref={mainRef} className="splide" aria-label="Main Models Carousel">
                  <div className="splide__track">
                    <ul className="splide__list">
                      {product.images.map((slide) => (
                        <li key={slide} className="splide__slide">
                          <img src={slide} alt={`Slide ${product.title}`} className='mx-auto h-full w-[70%] lg:w-[85%] object-cover' />
                        </li>
                      ))}
                    </ul>
                  </div>
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
                </div>
                <div className='absolute bottom-0 w-full left-1/2 -translate-1/2'>
                  
                <div ref={thumbnailsRef} className="splide splide-thumbnails" aria-label="Thumbnail Models Carousel">
                  <div className="splide__track ">
                    <ul className="splide__list flex justify-center">
                      {product.images.map((slide) => (
                        <li key={slide} className="splide__slide">
                          <img src={slide} alt={`Slide ${product.title}`} className='mx-auto h-full w-full object-cover' />
                        </li>
                      ))}
                    </ul>
                    </div>
                      </div>
                    
                </div>
              </div>
            ) : <Loading /> }
            <p className="font-suisse mt-[7px] text-[13px] leading-[22px] tracking-[3%] text-(--color-text-1) lg:mt-[13px]">
              {product.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
