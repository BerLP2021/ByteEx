import Button from '../ui/button'
import Icon from '../ui/Icon/Icon'
import hero from '../../data/heroImg.json'

function Hero() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-[6.15%] px-6 md:flex-row md:items-start md:px-[7.24%_4.25%]">
        <div className="flex w-full max-w-[78%] flex-col items-center md:max-w-[37.5%] md:items-start">
          <h1 className="contents text-[clamp(26px,calc(26px+12*(100vw-768px)/696),38px)] leading-[1.2] text-(--color-blue) md:block md:text-left">
            Don’t apologize for being comfortable.
          </h1>
          <ul className="mt-6 flex flex-col gap-7 md:gap-6">
            <li className="flex items-center gap-[13px] text-left">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F9F0E5]">
                <Icon name="day-night" className="h-[20px] w-[20px]" />
              </div>
              Beautiful, comfortable loungewear for day or night.
            </li>
            <li className="flex items-center gap-[13px] text-left">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F9F0E5]">
                <Icon name="waste" className="h-[15px] w-[19px]" />
              </div>
              No wasteful extras, like tags or plastic packaging.
            </li>
            <li className="flex items-center gap-[13px] text-left">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F9F0E5]">
                <Icon name="comfort" className="h-[13px] w-[14px]" />
              </div>
              Our signature fabric is incredibly comfortable — unlike anything
              you’ve ever felt.
            </li>
          </ul>
          <Button variant="cta" className="mt-8">
            Customize Your Outfit
          </Button>
        </div>
        <div className="mt-6 flex w-full flex-nowrap items-center justify-center md:mt-0 md:w-[56%] md:self-stretch">
          <span className="relative -z-2 -mr-[9.2%] aspect-[0.705] min-h-min w-[18.4%] shrink-0 bg-[linear-gradient(0deg,rgba(249,240,229,0.7)0%,rgba(249,240,229,0.217)100%)]" />
          {hero.map((item, index) => (
            <div
              key={index}
              className="relative w-[28.8%] shrink-0 not-nth-3:-z-1 nth-2:mr-[-6%] nth-3:w-[36%] nth-4:ml-[-6%]"
            >
              <img src={item.src} alt={item.alt} className="shrink-0" />
            </div>
          ))}
          <span className="relative -z-2 -ml-[9.2%] aspect-[0.705] min-h-min w-[18.4%] shrink-0 bg-[linear-gradient(0deg,rgba(249,240,229,0.7)0%,rgba(249,240,229,0.217)100%)]" />
        </div>
      </div>
    </section>
  )
}

export default Hero
