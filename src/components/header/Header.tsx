import Icon from '../ui/Icon/Icon'

function Header() {
  return (
    <header className="container flex justify-center py-[14px] md:justify-start md:py-[33px] md:pl-[96px]">
      <div className="h-[50px] w-[200px]">
        <Icon name="logo" />
      </div>
    </header>
  )
}

export default Header
