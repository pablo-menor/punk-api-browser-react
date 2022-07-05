import React from 'react'
import searchIcon from '../../../public/search_icon.svg'
import '../../styles/browser.css'

export const Browser = ({updateSearch}) => {
  return (
    <div className='browser'>
        <input onChange={(e) => updateSearch(e.target.value)} className='search_input' type="text" placeholder="Enter any food..."/>
        <img src={searchIcon} alt="search icon" className='search_icon' /> 
    </div>
  )
}
