import axios from 'axios';
import uuid from 'uuid';

const addReviewInStore = (newReview) => {
  return {
    type: 'ADD_REVIEW',
    newReview
  }
}

const addReview_id = (picReview, picReviewPublicId, reviewId, review_id) => {
  return {
    type: 'ADD_RESTAURENT_ID',
    picReview,
    picReviewPublicId,
    reviewId,
    review_id
  }
}

const addReviewIdIntoRestaurantInStore = (restaurantId, review_id) => {
  return {
    type: 'ADD_REVIEW_ID_TO_RESTAURANT',
    restaurantId,
    review_id
  }
}

const loadingReviewError = (error) => {
  return{
    type: "LOAD_RESTAURANT_ERROR",
    error
  }
}

export const addReview = (picReview, newReview) =>{
  return (dispatch) => {
    newReview.id = uuid.v4();
    dispatch(addReviewInStore(newReview));

    // here picReview is a file
    let picReviewToBackEnd = new FormData();
    picReviewToBackEnd.append('picReview', picReview);
    picReviewToBackEnd.append('title', newReview.title);
    picReviewToBackEnd.append('star', newReview.star);
    picReviewToBackEnd.append('description', newReview.description);
    picReviewToBackEnd.append('id', newReview.id);
    picReviewToBackEnd.append('user', newReview.user_id);

    //sending newReview to backend. no special argument, returns url, public_id, database id
    axios.post('/review/'+ newReview.restaurant_id, picReviewToBackEnd)
    .then( (response)=>{
      console.log(response.data)
      // here picHome is a url. needs local uuid to update restaurant with database id
      //dispatch(addRestaurant_id(response.data.picReview, response.data.picReviewPublicId, response.data.id, response.data._id));
    }).catch( (error) =>{
      dispatch(loadingReviewError(error));
    })
  }
}
