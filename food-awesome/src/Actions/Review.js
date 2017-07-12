import axios from 'axios';
import uuid from 'uuid';

const addReviewIdIntoRestaurantInStore = (restaurant_id, review_id) => {
  return {
    type: 'ADD_REVIEW_ID_TO_RESTAURANT',
    restaurant_id,
    review_id,
  }
}

const loadingReviewError = (error) => {
  return{
    type: "LOAD_REVIEW_ERROR",
    error
  }
}

export const addReviewWithPic = (picReview, newReview) =>{
  return (dispatch) => {

    // here picReview is a file
    let picReviewToBackEnd = new FormData();
    picReviewToBackEnd.append('picReview', picReview);
    picReviewToBackEnd.append('title', newReview.title);
    picReviewToBackEnd.append('star', newReview.star);
    picReviewToBackEnd.append('description', newReview.description);
    picReviewToBackEnd.append('user_id', newReview.user_id);

    //sending newReview to backend. no special argument, returns url, public_id, database id
    axios.post('/review/postReviewWithPic/'+ newReview.restaurant_id, picReviewToBackEnd)
    .then( (response)=>{
      dispatch(addReviewIdIntoRestaurantInStore(newReview.restaurant_id,response.data._id));
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}


export const addReviewWithoutPic = (newReview) =>{
  return (dispatch) => {

    //sending newReview to backend. no special argument, returns url, public_id, database id
    axios.post('/review/postReviewWithoutPic/'+ newReview.restaurant_id, newReview)
    .then( (response)=>{
      dispatch(addReviewIdIntoRestaurantInStore(newReview.restaurant_id,response.data._id));
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}

const addUserReviewToStore = (reviews) => {
  return {
    type: 'ADD_USER_REVIEW_TO_STORE',
    reviews
  }
}

export const getReviewOfUser = (user_id) => {
  return (dispatch) => {
    axios.get('/review/userReviews/'+user_id)
    .then( (response) => {
      console.log(response.data)
      dispatch(addUserReviewToStore(response.data))
    }).catch( (error) => {
      dispatch(loadingReviewError(error));
    })
  }
}

export const activeReviewDetails = (review_id) => {
  return {
    type: "ACTIVE_USER_REVIEW",
    review_id
  }
}

const updateUserReviewInStore = (reviewUpdated) => {
  return {
    type: "UPDATE_USER_REVIEW_IN_STORE",
    reviewUpdated
  }
}

export const updateReviewWithPic = (picReview, review) => {
  return (dispatch) => {
    // here picReview is a file
    let picReviewToBackEnd = new FormData();
    picReviewToBackEnd.append('picReview', picReview);
    picReviewToBackEnd.append('title', review.title);
    picReviewToBackEnd.append('star', review.star);
    picReviewToBackEnd.append('description', review.description);
    picReviewToBackEnd.append('picReviewPublicId', review.picReviewPublicId)

    // axios function to send info to backend database
    axios.put('/review/updateReviewWithPic/'+review._id,picReviewToBackEnd)
    .then( (response)=>{
      // here picReview is a new url
      dispatch(updateUserReviewInStore(response.data))
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}

export const updateReviewWithoutPic = (review) => {
  return (dispatch) => {
    // axios function to send info to backend database
    axios.put('/review/updateReviewWithoutPic/'+review._id,review)
    .then( (response)=>{
      // here picReview is a new url
      dispatch(updateUserReviewInStore(response.data))
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}

const deleteUserReviewInStore = (_id) => {
  return {
    type: "DELETE_REVIEW_IN_STORE",
    _id
  }
}

export const deleteReview = (_id) => {
  return (dispatch) => {
    dispatch(deleteUserReviewInStore(_id));
    axios.delete('/review/deleteReview/'+_id)
    .then( (response)=>{

    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}
