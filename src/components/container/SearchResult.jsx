import React, { useState, useEffect } from 'react'
import '../../styles/searchResult.css'
import { fetchFoodPairing } from '../../services/food.service'
import { SingleResult } from '../pure/SingleResult'

export const SearchResult = ({ currentSearch }) => {
    const [food, setFood] = useState([])

    useEffect(() => {
        if (currentSearch.length > 0) {
            fetchFoodPairing(currentSearch)
                .then((food) => setFood(food))
        }
    }, [currentSearch])

    return (
        <div className='results_container '>
            {food.map((item, index) => {
                return <SingleResult key={index} foodList={item.food_pairing}></SingleResult>
            })}
        </div>
    )
}
