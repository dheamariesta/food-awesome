import {getAdmin} from '../API/AdminAPI';
const initialRestaurent = getAdmin();


const Admin = (state = initialRestaurent, action) => { 
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
