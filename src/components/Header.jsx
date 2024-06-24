import logo from '../assets/images/logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={logo} alt="Logo" />
      <Nav />
    </header>
  )
}

export default Header