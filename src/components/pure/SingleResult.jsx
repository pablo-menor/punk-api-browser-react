import React from 'react'
import '../../styles/singleResult.css'

export const SingleResult = ({foodList}) => {
  return (
    <div className='card'>
        {foodList.map((food, i) => <span key={i}> - {food}</span>)}
    </div>
  )
}
