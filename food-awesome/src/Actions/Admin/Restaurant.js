import axios from 'axios';
import uuid from 'uuid';

const loadingRestaurant = () => {
  return{
    type: "LOADING_RESTAURANT"
  }
}

const storeRestaurant = (restaurant) => {
  return{
    type: "STORE_RESTAURANT",
    restaurant
  }
}

const loadingRestaurantError = (error) => {
  return{
    type: "LOAD_RESTAURANT_ERROR",
    error
  }
}

export const getRestaurant = () => {
  return (dispatch) => {                //thunk allows functions inside actions
    // dispatch(loadingRestaurant());
    axios.get('/api')
    .then( (response)=>{
      dispatch(storeRestaurant(response.data));
    }).catch( (error) =>{
      dispatch(loadingRestaurantError(error));
    })
  }
}

const addRestaurantInStore = (newRestaurant) => {
  return {
    type: 'ADD_RESTAURENT',
    newRestaurant
  }
}
const addRestaurant_id = (newRestaurantId,newRestaurant_id) => {
  return {
    type: 'ADD_RESTAURENT_ID',
    newRestaurantId,
    newRestaurant_id
  }
}

const updateRestaurantInStore = (restaurant) => {
  return {
    type: 'UPDATE_RESTAURENT',
    restaurant
  }
}

export const addRestaurant = (picHome, picIndividual, newRestaurant) => {
  return (dispatch) => {
    let restaurant_id;
    // add newRestaurant to store first while waiting for backend to update
    newRestaurant.id = uuid.v4();
    dispatch(addRestaurantInStore(newRestaurant));

    //sending newRestaurant to backend
    axios.post('/api',newRestaurant)
    .then( (response)=>{
      restaurant_id = response.data._id
      //update newRestaurant in store to get the ._id of database
      dispatch(addRestaurant_id(response.data.id,response.data._id));
    }).catch( (error) =>{
      console.log(error);
      dispatch(loadingRestaurantError(error));
    })


    let picHomeToBackEnd = new FormData();
    picHomeToBackEnd.append('picHome', picHome);
    // picHomeToBackEnd.append('picIndividual', picIndividual);
    picHomeToBackEnd.append('name', "picHome");
    picHomeToBackEnd.append('id', restaurant_id);

    let picIndividualToBackEnd = new FormData();
    picIndividualToBackEnd.append('picIndividual', picIndividual);
    picIndividualToBackEnd.append('name', "picIndividual");
    picIndividualToBackEnd.append('id', restaurant_id);
    // console.log(picHome)

    // get pic url from database
    axios.post('/api/files/picHome',picHomeToBackEnd)
    .then( (response)=>{
      //dispatch(updateRestaurantInStore(response.data));
    }).catch( (error) =>{
      console.log(error);
      dispatch(loadingRestaurantError(error));
    })

    axios.post('/api/files/picIndividual',picIndividualToBackEnd)
    .then( (response)=>{
      //dispatch(updateRestaurantInStore(response.data));
    }).catch( (error) =>{
      console.log(error);
      dispatch(loadingRestaurantError(error));
    })
  }
}




export const updateRestaurant = (restaurant) => {
  return (dispatch) => {                //thunk allows functions inside actions
    // dispatch function to send info to store first
    dispatch(updateRestaurantInStore(restaurant));
    // axios function to send info to backend database
    axios.put('/api/'+restaurant._id,restaurant)
    .then( (response)=>{
      console.log(response.data);
    }).catch( (error) =>{
      dispatch(loadingRestaurantError(error));
    })
  }
}

const deleteRestaurantInStore = (_id) => {
  return {
    type: 'DELETE_RESTAURENT',
    _id
  }
}

export const deleteRestaurant = (_id) => {
  return (dispatch) => {                //thunk allows functions inside actions
    dispatch(deleteRestaurantInStore(_id));
    axios.delete('/api/'+_id)
    .then( (response)=>{
      console.log(response.data);
    }).catch( (error) =>{
      dispatch(loadingRestaurantError(error));
    })
  }
}
