import burgerMenu from '../assets/images/icon-menu.svg'

const Nav = () => {
  return (
    <>
      <ul className="hidden text-[18px] sm:flex sm:w-[438px] sm:place-content-around sm:text-4 sm:items-center">
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
      <img src={burgerMenu} alt="Burger menu"
      className='w-10 h-4 cursor-pointer sm:hidden'/>
    </>
  )
}

export default Nav