import uuid from 'uuid';

export const addRestaurent = (restaurent) => {  // basic action object
  return {
    type: 'ADD_RESTAURENT',
    id: uuid.v4(),
    name: restaurent.name,
    star: restaurent.star,
    describeHome: restaurent.describeHome,
    describeIndividual: restaurent.describeIndividual,
    picHome: restaurent.picHome,
    picIndividual: restaurent.picIndividual
  }
}

export const updateRestaurent = (restaurent) => {
  return {
    type: 'UPDATE_RESTAURENT',
    restaurent
  }
}
