export const setAdmin = (restaurents) => { //storing into local storage of the browser
  if(Array.isArray(restaurents)){ // to prevent error being saved into local storage
    localStorage.setItem('restaurents', JSON.stringify(restaurents)); // 1st arugment sets the name, 2nd arugment = item to store
  }
}

export const getAdmin = () => {
  const restaurentsJSON = localStorage.getItem('restaurents');    //calling from localStorage using the name
  let restaurents = [];
  try{
    restaurents = JSON.parse(restaurentsJSON);
  }catch(error){
    console.log("Error: could not decode restaurents's from localStorage")
  }
  return Array.isArray(restaurents) ? restaurents: [];
}

export const filterRestaurentToUpdate = (restaurents,nameForUpdate) => {
  restaurentToUpdate = restaurents.filter((elem,index) => {
    return elem.name.includes(nameForUpdate);
  })
  return restaurentToUpdate;
}
