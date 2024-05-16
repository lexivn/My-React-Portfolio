import React from 'react'

const Navbar = ({className, item}) => {
  return (
    <li className={className}><a href={item.link}>{item.icon}</a></li>
  )
}

export default Navbar