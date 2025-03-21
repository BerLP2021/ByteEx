import { useEffect, useState } from 'react'
import Benefits from './components/benefits'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import TopBanner from './components/topBanner/TopBanner'

import usersReviewsMockData from './data/reviews.json'
import benefitsMockData from './data/benefits.json'
import About from './components/about'
import Loading from './components/ui/loading'

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
        {reviews.length > 0 && benefits.length > 0 ? (
          <Benefits
            totalReviews={fiveStarsReviews.length * 97}
            userReviewDemo={reviews[0]}
            benefitsData={benefits}
          />
        ) : (
          <Loading />
        )}
        <About />
      </main>
    </>
  )
}

export default App
