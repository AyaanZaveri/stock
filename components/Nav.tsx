import React from 'react'
import Search from './Search'
import { BiHome } from 'react-icons/bi'

const Nav = () => {
  return (
    <div className="fixed p-5 w-full shadow-sm rounded-b-lg bg-white bg-opacity-50 backdrop-blur">
      <div className='flex justify-center'>
        <div className="flex flex-row w-9/12 md:w-4/12 items-center justify-center">
          {/* <BiHome className="h-6 w-6 absolute left-0 mx-7 text-slate-700" /> */}
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Nav
