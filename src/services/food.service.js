const API_URL_FOOD = 'https://api.punkapi.com/v2/beers?food='

/**
 * 
 * @param {string} food  Input from the user
 * @returns {Array}  contains each result matching the search
 */
export const fetchFoodPairing = async (food) => {

    const response = await fetch(`${API_URL_FOOD}${food}`)
    const result = await response.json();
    return result
}