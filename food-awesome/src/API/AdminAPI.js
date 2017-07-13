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

export const searchFunction = (thingToSearchIn,nameToSearch) => {
  let thingToShow = thingToSearchIn.filter((elem,index) => {
    return elem.title.includes(nameToSearch);
  })
  return thingToShow;
}

export const calculateStar = (restaurant,postUpdateOrDelete,newStar,oldStar) => {
  let total = parseInt(restaurant.star) * (restaurant.reviews.length + 1) ;
  console.log(total)
  let average;
  switch (postUpdateOrDelete) {
    case "POST":
      let newtotal = parseInt(total) + parseInt(newStar)
      average = Math.round(newtotal/(restaurant.reviews.length + 2));
      break;
    case "UPDATE":
      total -= parseInt(oldStar);
      total += parseInt(newStar);
      average = total/(restaurant.reviews.length);
      break;
    case "DELETE":
      total -= parseInt(oldStar);
      average = total/(restaurant.reviews.length - 1);
      break;
    default:
      console.log("wrong type")
  }
  return average
}
