import {getAdmin} from '../API/AdminAPI';
const initialRestaurent = getAdmin();


const Admin = (state = initialRestaurent, action) => { // if state is not given, then use [] ____ if state is given, just use that state
                                        // state is always same, but action is different??
                                        // action is exactly what is returned in the Actions folder/file
  switch (action.type) {
    case 'ADD_RESTAURENT':
      return [
        ...state,   //spread operator__ applied to state-- we are cloning state
        {
          id: action.id,
          name: action.name,
          star: action.star,
          describeHome: action.describeHome,
          describeIndividual: action.describeIndividual,
          picHome: action.picHome,
          picIndividual: action.picIndividual
        }
      ]
      break;
    default:
      return state
  }
}

export default Admin;
