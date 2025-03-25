import Button from '../ui/button'
import Icon from '../ui/Icon/Icon'
import hero from '../../data/heroImg.json'

function Hero() {
  return (
    <section className="container2">
      <div className="flex flex-col items-center gap-[6.15%] px-6 py-[0px_86px] text-(--color-text-1) md:flex-row md:items-start md:px-[7.24%_4.25%] md:py-[29px_86px]">
        <div className="contents w-full max-w-[78%] flex-col items-center md:flex md:max-w-[37.5%] md:items-start">
          <h1 className="-order-2 text-[clamp(26px,calc(26px+12*(100vw-768px)/696),38px)] leading-[1.2] text-(--color-blue) md:order-0 md:text-left">
            Don’t apologize for being comfortable.
          </h1>
          <ul className="mt-6 flex flex-col gap-7 text-left text-[13px] leading-[18px] tracking-[3%] md:gap-6 md:text-[15px] md:leading-[23px]">
            <li className="flex items-center gap-[13px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F9F0E5] text-(--color-blue)">
                <Icon name="day-night" />
              </div>
              Beautiful, comfortable loungewear for day or night.
            </li>
            <li className="flex items-center gap-[13px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F9F0E5] text-(--color-blue)">
                <Icon name="waste" />
              </div>
              No wasteful extras, like tags or plastic packaging.
            </li>
            <li className="flex items-center gap-[13px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F9F0E5] text-(--color-blue)">
                <Icon name="comfort" />
              </div>
              Our signature fabric is incredibly comfortable — unlike anything
              you’ve ever felt.
            </li>
          </ul>
          <Button variant="cta" className="mt-8">
            <a href="#">Customize Your Outfit</a>
          </Button>
        </div>
        <div className="-order-1 mt-[17px] flex w-full flex-nowrap items-center justify-center md:order-0 md:mt-0 md:w-[56%] md:self-stretch">
          <span className="relative -z-2 -mr-[9.2%] aspect-[0.705] min-h-min w-[18.4%] shrink-0 bg-[linear-gradient(0deg,rgba(249,240,229,0.7)0%,rgba(249,240,229,0.217)100%)]" />
          {hero.map((item, index) => (
            <div
              key={index}
              className="nth-3:border-2 border-white relative w-[28.8%] shrink-0 not-nth-3:-z-1 nth-2:mr-[-6%] nth-3:w-[36%] nth-4:ml-[-6%]"
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
