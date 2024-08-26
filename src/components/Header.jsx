import React from 'react'
import NavItems from '../assets/NavItems'
import logo from '../assets/images/vitality-logo 1.png'

function Header() {
  return (
    <div className='flex justify-between'>
<img src={logo} alt="" className='h-12' />
      <ul className='flex justify-between gap-10 p-3 text-orange-500 text-center'>
        {
          NavItems.map((item)=>(
            <li key={item.id}> {item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Header