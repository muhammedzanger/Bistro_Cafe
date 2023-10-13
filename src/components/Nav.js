/** @format */

import React from "react"
import { navData } from "../data"
const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col items-center justify-center gap-y-4'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.href}
                className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
