import {GiHamburgerMenu} from 'react-icons/gi';
import Nav, { Hamburger, Logo, Menu, MenuLink } from './Navbar.style';
import {useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav justify={'space-between'} wrap={'wrap'}>
      <Logo to='/'>
        <i>{'<Shutter/>'}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu /> </Hamburger>
      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to='/register'>Register</MenuLink>
        <MenuLink to='/login' onClick={()=> sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar;