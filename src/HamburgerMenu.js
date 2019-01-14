import React from 'react'
import './HamburgerMenu.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'


class HamburgerMenu extends React.Component {
  render () {
    return (
      <Menu>
        <Link id="about" className="menu-item" to ="/search">Search</Link>
        <Link id="home" className="menu-item" to ="/">Home</Link>
        <Link id="contact" className="menu-item" to ="/CurrentlyReading">Currently Reading</Link>
        <Link id="contact" className="menu-item" to ="/WantToRead">Want to Read</Link>
        <Link id="contact" className="menu-item" to ="/InProgress">In Progress</Link>
      </Menu>
    );
  }
}
export default HamburgerMenu
