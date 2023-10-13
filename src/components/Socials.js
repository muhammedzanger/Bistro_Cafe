/** @format */

import React from "react"
import { socialData } from "../data"
const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((icon, index) => {
        return (
          <a
            href={icon.href}
            key={index}
            className='border border-white/20
          rounded-full flex justify-center items-center text-sm
          hover:text-accent hover:border-accent transition-all h-[35px] w-[35px]'>
            {icon.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Socials
