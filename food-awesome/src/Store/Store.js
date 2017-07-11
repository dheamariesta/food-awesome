import { createStore, compose, combineReducers, applyMiddleware } from 'redux'; // compose is used for debugging here
import RestaurantReducer from '../Reducers/Admin/Restaurant';
import ActiveRestaurantReducer from '../Reducers/Admin/ActiveRestaurant';

import activeHomeReducer from '../Reducers/Home/activeHome'

import UserReducer from '../Reducers/UserReducer';

import thunk from 'redux-thunk';

export let initStore = () => {

  const reducer = combineReducers({
    restaurants: RestaurantReducer,
    activeRestaurant: ActiveRestaurantReducer,

    activeHome: activeHomeReducer,

    user: UserReducer

  });

  const store = createStore( reducer,     // passing all reducer-- each reducer creates as an array inside this.props
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f is just a way to do nothing
  ) )

  return store;
}
