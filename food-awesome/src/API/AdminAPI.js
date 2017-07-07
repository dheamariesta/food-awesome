export const setAdmin = (restaurants) => { //storing into local storage of the browser
  if(Array.isArray(restaurants)){ // to prevent error being saved into local storage
    localStorage.setItem('restaurants', JSON.stringify(restaurants)); // 1st arugment sets the name, 2nd arugment = item to store
  }
}

export const getAdmin = () => {
  const restaurantsJSON = localStorage.getItem('restaurants');    //calling from localStorage using the name
  let restaurants = [];
  try{
    restaurants = JSON.parse(restaurantsJSON);
  }catch(error){
    console.log("Error: could not decode restaurants's from localStorage")
  }
  return Array.isArray(restaurants) ? restaurants: [];
}

// export const filterRestaurentToUpdate = (restaurants,nameForUpdate) => {
//   restaurentToUpdate = restaurants.filter((elem,index) => {
//     return elem.name.includes(nameForUpdate);
//   })
//   return restaurentToUpdate;
// }
