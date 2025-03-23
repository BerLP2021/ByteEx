import { useEffect, useState } from 'react'
import Benefits from './components/benefits'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import TopBanner from './components/topBanner/TopBanner'

import usersReviewsMockData from './data/reviews.json'
import benefitsMockData from './data/benefits.json'
import About from './components/about'
import Description from './components/description'
import Reviews from './components/reviews'
import Faq from './components/faq'
import InfoBanner from './components/infoBanner'
import FinalCTA from './components/finalCTA'

function App() {
  const [reviews, setReviews] = useState<IReview[]>([])
  const [benefits, setBenefits] = useState<IBenefitItem[]>([])
  const fiveStarsReviews = reviews.filter((review) => review.rate === 5)

  useEffect(() => {
    //pseudo async fetch
    setTimeout(() => {
      setReviews(usersReviewsMockData)
      setBenefits(benefitsMockData)
    }, 500)
  }, [])

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <Benefits
          totalReviews={fiveStarsReviews.length * 97}
          userReviewDemo={reviews[0]}
          benefitsData={benefits}
        />
        <About />
        <Description totalReviews={fiveStarsReviews.length * 97} />
        <Reviews reviewsData={reviews} />
        <Faq totalReviews={fiveStarsReviews.length * 97} />
        <InfoBanner />
        <FinalCTA totalReviews={fiveStarsReviews.length * 97} />
      </main>
    </>
  )
}

export default App
